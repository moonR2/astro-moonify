import { Section } from './Section';

const Hero = () => (
  <Section>
    <div className="hero bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img
            src="/assets/images/me@3x.png"
            className="mx-auto rounded-full"
          />
          <div className="mt-8 border-solid border-white text-4xl font-bold">
            Hello there, I'm{' '}
            <h1 className="inline-block text-accent">Moonify</h1>{' '}
            <span className="text-xl">🌙</span>
          </div>
          <p className="py-5 text-2xl">
            My name is Andrés Orozco (aka moonify) and I am an IT engineer from
            Ecuador 🇪🇨. Currently I'm working at{' '}
            <a className="underline" href="https://www.wiibiq.com/es">
              Wiibiq
            </a>{' '}
            as full-stack developer using React/React-native and Django.
            <br />
            <br />
            <i>Philosophy is man's best super power.</i>
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export { Hero };
