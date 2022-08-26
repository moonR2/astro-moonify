---
layout: '@/templates/BasePost.astro'
title: Interactuar con contratos de Ethereum
description: Una guía básica de como interactuar con contratos de Ethereum usando Truffle.
pubDate: 2021-09-05T00:00:00Z
imgSrc: '/assets/images/interactuar.jpg'
imgAlt: 'Window managers'
---
Apenas voy unos meses aprendiendo de "Blockchain Development" y uno de sus temas apasionantes son los tokens. No voy a ahondar en detalle como estos funcionan, sus varios estándares etc. Esto queda de tarea para el lector, sin embargo, si haré un repaso de como crear un token con el estándar ERC20 de una forma muy sencilla. Antes que nada, si no deseas leer, también dejo un video con toda la guía. 
[![IMAGE ALT TEXT](http://img.youtube.com/vi/gk_EXjq6kxY/0.jpg)](http://www.youtube.com/watch?v=gk_EXjq6kxY "Crea tu token ERC20")

Para este proyecto estaremos usando OpenZepellin. OpenZepellin tiene una serie de productos para crear y manejar contratos, pero en este caso en concreto estaremos usando su librería para crear contratos de manera fácil y segura. La ventaja de OpenZepellin es que este ya tiene implementado distintos estándares como el ERC20 (Fungible Tokens) y ERC721 (NFTs) esto nos ayuda a ahorrar tiempo de desarrollo y nos provee de seguridad para nuestro contrato.

## Pre-Requisitos 
Tanto [OpenZepellin](https://openzeppelin.com/) como el framework que usaremos para realizar el deploy del contrato ([Truffle](https://www.trufflesuite.com/)), están construidos con JavaScript por lo que necesitaremos de [Node](https://nodejs.org/en/download/package-manager/) para este proyecto. Una vez hayas instalado node abriremos un terminal y escribimos:

`node --version` 

 Si la instalación ha sido correcta el comando nos lanzara nuestra versión de node, ahora podremos usar npm (Node Package Manager) para instalar los paquetes necesarios. 
 
[Truffle](https://www.trufflesuite.com/) es un framework que nos brinda varias herramientas para manejar nuestros contratos, en este caso lo usaremos para hacer el deploy de nuestro contrato a una red de pruebas:

 `npm install truffle -g`
 
Ahora crearemos nuestra carpeta del proyecto, puedes ponerle el nombre que desees, por ejemplo crear la carpeta test.
```bash
mkdir test
```
Ahora usando el terminal, entraremos en esta carpeta
```bash
cd test
```
 y correremos el comando 
`truffle init` 
En el caso de que nos de error, podemos intentar correrlo con el comando `npx truffle init` 

Este comando creara la jerarquía de directorios necesarios para crear nuestro token. 
 Finalmente usaremos npm para instalar OpenZepellin
` npm install @openzeppelin/contracts`
Muy bien ahora si ya tenemos todo listo para empezar a crear nuestro token.

## Entendiendo OpenZepellin
OpenZeppelin nos provee de varios contratos ya implementados, por ejemplo el contrato ERC20 ya tiene implementado el estándar ERC20 para construir nuestro contrato. Además de esto tenemos extensiones para añadir nuevas características a nuestro contrato. 
### ERC20Burnable 
Nos permite añadir la opción de quemar tokens tanto de nuestra wallet como de la wallet de otros, esto lo puede hacer tanto el dueño de los tokens o aquellos que tengan el permiso, lo mas común es que el owner del contrato tenga estos permisos. 
### ERC20Capped 
Nos permite añadir un límite a la cantidad existentes de tokens. 
### ERC20Pausable 
Nos permite añadir la opción de pausar tanto las transferencias, como el minting y el quemado de los tokens. 
### ERC20Snapshot 
Nos permite implementar mecanismos de snapshot. Cuando creamos la snapshot los balances y el suministro total (total supply) son guardados para que puedan ser accedidos en futuro. 
### ERC20Permit 
Con esta extensión podemos implementar permisos para otras cuentas, por ejemplo para crear varios roles y a que funciones tienen acceso estos roles. 

Además de estas extensiones mencionadas, existen otras, que al momento de la creación de este post, siguen estando en versiones de prueba. 

## Creación del token 
OpenZepellin recientemente añadió una nueva herramienta a su suite, se trata de [Wizzard](https://wizard.openzeppelin.com/) esta herramienta nos sirve como un esquema de partida para la creación de tokens mas complejos.
En mi caso el contrato que estaremos creando para nuestro token tendrá la propiedad de crear nuevos tokens (mintable), quemar tokens (burnable) y pausar tanto las transferencias, como la creación y quemado de los tokens (pausable). No nos olvidemos, también, de poner el nombre y símbolo de nuestro token, ademas de una cantidad pre-acuñada (pre-mint) para el deployer del contrato. Con todas estas configuraciones el Wizzard nos generara un código parecido a este:
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Moonify is ERC20, ERC20Burnable, Pausable, Ownable {
    constructor() ERC20("Moonify", "MFY") {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }
}

```
Copiamos el código del Wizzard y creamos un nuevo archivo dentro de la carpeta **contracts** que fue creada por truffle. En mi caso el nombre del archivo es Moonify.sol (extensión de solidity) y dentro de este archivo pegamos el código de nuestro contrato. 


Listo con esto quedaría nuestro contrato terminado, a primera vista parece un contrato muy simple. Pero en realidad contiene varias funcionalidades, con las cuales no solo podemos hacer transferencias de nuestro token, si no también, crear más tokens o quemar tokens. 
Nota: Si deseas conocer a mas profundidad que hace cada linea del contrato te recomiendo ver mi video tutorial.
## Deployment del contrato
Ahora que nuestro contrato esta terminado, nos queda hacer el deploy del contrato para que podamos empezar a hacer uso de nuestro token. En este caso haremos el deploy sobre una test network, ya que en este tipo de redes no necesitaremos de ETHER "real" para pagar los costos de gas, en este caso, estaremos usando la red de Kovan. 
Lo primero que haremos es crear una cuenta en [infura](https://infura.io/ ). Una vez creada la cuenta, nos dirigimos a create new project, le ponemos cualquier nombre y lo importante aquí es copiar el endpoint que empieza por https.  

Lo siguiente es crear una wallet en kovan usando metamask, la creacion de la wallet en metamask es sencillo, solo recuerda que una vez tengas tu wallet poner como red Kovan. 
IMAGEN

Finalmente, necesitamos es conseguir ETHER, recordando que este ETHER no tiene valor real ya que estamos en una test network. Para esto vamos a la siguiente página: https://faucet.kovan.network/ pegamos nuestra llaves pública y esperamos unos minutos hasta que la transacción haya sido verificada.  

## Configurar Deployment
Estamos llegando a la parte final, ahora ya solo nos resta configurar el deployment de nuestro contrato, para esto tendremos que instalar una libreria extra con npm, para esto en una terminal escribimos el siguiente comando:
```bash
npm i -g hdwallet-provider 
```
Ahora si abrimos nuestro archivo de configuración **truffle-config.js** con nuestro editor de texto de preferencia y vamos a crear las siguientes variables. 
```javascript
const HDWalletProvider = require("@truffle/hdwallet-provider");
const privateKey = "TU_LLAVES_PRIVADA";
const endpointUrl = "INFURA_ENDPOINT"
/**
* Use this file to configure your truffle project. It's seeded with some...
```
ahora nos dirigimos a la parte de networks en el archivo de configuración y vamos a definir la red de Kovan
```javascript
kovan: {
  provider: function() {
    return new HDWalletProvider(
      //private keys array
      [privateKey],
      //url to ethereum node
      endpointUrl
    )
  },
  gas: 8000000,
  gasPrice: 25000000000,
  network_id: 42
},
```
Ahora necesitamos poner que versión del compilador de solidity deseamos usar.
```javascript
// Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.1",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },
```
 Ahora entraremos a la carpeta de migrations y creamos un archivo con el nombre de **2_deploy.js** y pegamos el siguiente código. 
```javascript
const contrato = artifacts.require("Moonify"); //require(nombreContrato)

module.exports = async function (deployer) {
    await deployer.deploy(contrato);
}
```
Con esto hemos finalizado la configuración para el deploy del contrato, se que parece tedioso, pero es un proceso que lo repetirás tanto que ya se hará natural.

Listo! ahora si estamos listos para hacer el deploy de nuestro contrato. Primero vamos a compilar el contrato: 
```javascript
truffle compile 
```
Finalmente vamos a hacer el deploy con: 
```javascript
truffle migrate --network kovan 
```
Si todo ha salido bien has hecho el deploy de tu token ERC20 a la red de Kovan. Felicidades! Recuerda copiar la address de tu token para que la puedas añadir a metamask.