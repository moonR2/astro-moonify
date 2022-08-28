---
layout: '@/templates/BasePost.astro'
title: Interactuar con contratos de Ethereum
description: Una guía básica de como interactuar con contratos de Ethereum usando Truffle.
pubDate: 2021-09-05T00:00:00Z
imgSrc: '/assets/images/erc20.jpg'
imgAlt: 'Window managers'
---
En el blog [anterior](https://dev.to/moonify/crear-facilmente-tokens-erc20-25il) describí como crear un token ERC20 de forma sencilla usando OpenZepellin. Este contrato nos brindaba la posibilidad de acuñar tokens (mint), quemar tokens (burnable) y pausar la transferencia de los tokens (pausable), sin embargo aun no mostré como se puede llamar a las funciones del contrato con estas propiedades. Hoy aprenderemos a hacerlo.

Antes de empezar debemos entender la diferencia entre una call y una transacción. 

## Call
Cuando hacemos una call ejecutamos código que la blockchain, pero esta ejecución no cambiara ningún dato en la blockchain. Por lo tanto las calls no cuestan ETH, es decir que el principal uso de las calls es para leer datos de la blockchain. En general las calls nos retornan un valor.

## Transacción
Por otro lado, las transacciones cambian el estado de la blockchain, es decir, escriben (o cambian) datos de la red. Por lo tanto; las transacciones tienen un costo de gas. En general las transacciones nos retornan una id de transacción. 

Es vital conocer esta diferencia tanto cuando programamos contratos inteligentes como cuando queremos obtener o escribir datos en la blockchain.

## Interactuar con contratos usando truffle.
Truffle nos brinda la posibilidad de interactuar con los contratos a través de sus abstracciones. Podemos crear estas abstracciones tanto en la consola de desarrollo como creando scripts usando JavaScript.

### Consola
Primeramente necesitamos ingresar a la consola de desarrollador espécificando la red en la que hicimos el deploy del contrato. 
<div class="mockup-code">
```bash
truffle console --network kovan
```
</div>

La consola de truffle nos permite interactuar con nuestros contratos usando JavaScript. Ahora necesitamos obtener la abstracción de nuestro contrato, si seguiste el tutorial anterior recordaras que el nombre del contrato de mi token ERC20 es Moonify.
```javascript
truffle(kovan)> let instance = await Moonify.deployed()
```
Ahora por ejemplo, si llamamos a nuestra variable **instance** observaremos como nos devuelve la abstracción de nuestro contrato. 
```javascript
truffle(kovan)> instance
```
Como podrás notar la abstracción del contrato contiene tanto las funciones, variables, eventos y address de nuestro token. Con la abstracción lista ya podemos empezar a usar las funciones de nuestro contrato. 

Probemos pausar las transferencias de nuestro token, para esto habiamos creado una función pause que no recibe ningún parametro pero que solo puede ser llamada por el dueño del contrato. 
<div class="mockup-code">

```solidity
function pause() public onlyOwner {
    _pause();
}
```

</div>

Para llamarla basta con escribir el siguiente comando: 

```javascript
truffle(kovan)> instance.pause()
```

Ahora por ejemplo si queremos enviar nuestros tokens a otra cuenta usando metamask, veremos que nuestra transacción tendrá un error. De hecho, podemos revisar nuestra transacción fallida en Etherscan y observar que la transacción ha sido revertida y nuestro ETH devuelto. 


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/05nv23cvplte3rj5mvkj.png)

Por supuesto, para volver a activar las transacciones de nuestro token basta con correr:
```javascript
truffle(kovan)> instance.unpause()
```
Como habrás notado hemos llamado solo a funciones que no requiren de parámetros. Nuestra función **mint**, por ejemplo, require de una address y de una cantidad. Esto tranquilamente lo podríamos hacer desde la consola, pero esto trae muchos incovenientes como andar copiando y pegando distintas address, como también, que una vez cerrado la consola tendriamos que repetir todo este procedimiento. ¿Solución? Crear un script y ejectuarlo con Truffle.
### Scripts
Como acabo de mencionar, los scripts nos traen muchas ventajas. Empezemos creado una carpeta llamada scripts, donde hubicaremos los scripts para ser reutilizados. 
```bash
mkdir scripts
```
Ahora creemos rápidamente un script que nos permita acuñar tokens para una cuenta. El nombre del script será **mint.js**, recuerda guardarlo dentro de la carpeta de scripts.
```javascript
const web3 = require("web3")
var cantidad = 100
var address = "0x8A7320D4E9bcA258E73f8ec61F4e4149f22f6F96"

module.exports = async function main(callback){
    try {
        // Obtenemos la abstracción del contrato
        const contrato = await artifacts.require("Moonify").deployed()
        // Convertimos la cantidad a acuñar en Big Number
        const value = web3.utils.toBN(cantidad * 1e18)
        // Llamamos a nuestra función mint con una address y valor a acuñar
        await contrato.mint(address, value.toString());
        callback(0);
    } catch (error) {
        console.error(error);
        callback(1);
    }
}
```
El script es bastante sencillo y es una buena base para crear otros scripts para otras funciones. De todas formas he dejado comentarios explicando las lineas mas importantes. 

Finalmente, para ejectuar nuestro script: 
```bash
truffle exec mint.js --network kovan
```
Si todo ha salido bien habremos acuñado 100 tokens a la cuenta especificada en la variable address.

## Conclusiones
Como lo acabamos de observar, interactuar con nuestros contrato es bastante sencillo usando truffle. Cabe aclarar que hemos interactuado con un Token creado por nosotros. Para interactuar con contratos de terceros necesitaremos la ABI del contrato y hacer uso del paquete [@truffle/contract](https://www.npmjs.com/package/@truffle/contract). También te invito a estudiar los contratos de OpenZepellin para que puedas llamar a muchas otras funciones, por ejemplo, **owner()** es una call que nos permite saber el address del dueño del contrato.