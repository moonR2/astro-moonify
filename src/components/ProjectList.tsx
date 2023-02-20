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
        name="Gipp's Traffic Simulation"
        description="A Python implementation of Gipps’ Car-Following model for traffic simulation. This was my degree project so maybe you will find the code somewhat messy."
        link="https://github.com/moonR2/GippsTrafficSimulation"
        img={{
          src: '/assets/images/gipps-simulation.png',
          alt: 'Gipps Traffic Simulation',
        }}
        category={
          <>
            <Tags color={ColorTags.LIME}>Python</Tags>
          </>
        }
      />
      <Project
        name="FN-Tools"
        description="This was a set of tools that allow you to change and force certain configuration for Fornite BR from Epic Games. The project now is deprecated."
        link="https://github.com/moonR2/FN-Tools"
        img={{ src: '/assets/images/fn-tools.png', alt: 'FN-Tools' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>C#</Tags>
            <Tags color={ColorTags.BLUE}>.NET</Tags>
          </>
        }
      />
      <Project
        name="This webpage"
        description="I created this webpage as a remake of my old website. Also to try Astro with React and practice some CSS with Tailwind."
        link="https://github.com/moonR2/astro-moonify"
        img={{ src: '/assets/images/thisweb.jpg', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.INDIGO}>Tailwind</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="My AwesomeWM configuration"
        description="AwesomeWM configuration inspired by @rxyhn but optmized for desktops and with keyboard layout switcher."
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
