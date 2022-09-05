import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    <div className="border-t border-gray-600 pt-5">
      2022 Moonify. Website built with Astro + React using this{' '}
      <a
        href="https://github.com/ixartz/Astro-boilerplate"
        className="text-primary-focus"
      >
        boilerplate
      </a>
    </div>
  </Section>
);

export { Footer };
