import { Project } from './Project';
import { Section } from './Section';
import { ColorTags, Tags } from './Tags';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <span className="text-accent">Projects</span>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="T3-Twitter"
        description="A Twitter clone developed using the T3‑Stack, which consists of TypeScript, NextJS, tRPC and Tailwind. Hosted on Vercel and implemented an automated deployment workflow using GitHub Actions."
        link="https://github.com/moonR2/t3-chat"
        img={{
          src: '/assets/images/t3twitter.jpg',
          alt: 'T3-Twitter',
        }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>React</Tags>
            <Tags color={ColorTags.SKY}>NextJS</Tags>
            <Tags color={ColorTags.INDIGO}>tRPC</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.FUCHSIA}>Tailwind</Tags>
            <Tags color={ColorTags.EMERALD}>Prisma</Tags>
          </>
        }
      />
      <Project
        name="TFT Discord Bot"
        description="A Discord bot that allows you to get information about the game Teamfight Tactics. It was developed using Python, Discord.py and Riot Games API."
        link="https://github.com/moonR2/tft_lolsadmemes"
        img={{
          src: '/assets/images/discordbot.jpg',
          alt: 'TFT Discord Bot',
        }}
        category={
          <>
            <Tags color={ColorTags.LIME}>Python</Tags>
            <Tags color={ColorTags.SKY}>Discord.py</Tags>
            <Tags color={ColorTags.INDIGO}>Riot Games API</Tags>
          </>
        }
      />
      <Project
        name="This webpage"
        description="I created this webpage as a remake of my old website. Also to try Astro with React and practice some CSS with Tailwind."
        link="https://github.com/moonR2/astro-moonify"
        img={{ src: '/assets/images/webpage.jpg', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.NEUTRAL}>Astro.js</Tags>
            <Tags color={ColorTags.BLUE}>React</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.FUCHSIA}>Tailwind</Tags>
          </>
        }
      />
      <Project
        name="Gipp's Traffic Simulation"
        description="A Python implementation of Gipps’ Car-Following model for traffic simulation. This was my degree project so maybe you will find the code somewhat messy."
        link="https://github.com/moonR2/GippsTrafficSimulation"
        img={{
          src: '/assets/images/gipss.jpg',
          alt: 'Gipps Traffic Simulation',
        }}
        category={
          <>
            <Tags color={ColorTags.LIME}>Python</Tags>
            <Tags color={ColorTags.EMERALD}>Matplotlib</Tags>
            <Tags color={ColorTags.SKY}>NumPy</Tags>
            <Tags color={ColorTags.INDIGO}>NetworkX</Tags>
          </>
        }
      />
      <Project
        name="FN-Tools"
        description="This was a set of tools that allow you to change and force certain configuration for Fornite BR from Epic Games. The project now is deprecated."
        link="https://github.com/moonR2/FN-Tools"
        img={{ src: '/assets/images/fn-tools.jpg', alt: 'FN-Tools' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>C#</Tags>
            <Tags color={ColorTags.BLUE}>.NET</Tags>
          </>
        }
      />
      <Project
        name="My AwesomeWM configuration"
        description="AwesomeWM configuration inspired by @rxyhn but optmized for desktops with keyboard layout switcher."
        link="https://github.com/moonR2/awesomeWM-for-desktops"
        img={{ src: '/assets/images/awesome.jpg', alt: 'Awesome WM' }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>Lua</Tags>
            <Tags color={ColorTags.SKY}>AwesomeWM</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
