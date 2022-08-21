import { Section } from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <div className="hero bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="text-4xl font-bold">
            Hello there, I'm{' '}
            <h1 className="inline-block text-accent">Moonify</h1>
          </div>
          <p className="py-5 text-2xl">
            My name is Andrés Orozco (aka moonify) and I am an IT engineer from
            Ecuador 🇪🇨. I just finished my studies in July 2021, so I'm working
            hard to gain more experience. Currently I'm working at Wiibiq as
            full-stack developer using React/React-native and Django .
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export { Hero };
