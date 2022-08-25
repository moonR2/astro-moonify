import { Section } from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <div className="navbar rounded-xl bg-base-300">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl normal-case">
          Moonify
        </a>
      </div>
    </div>
  </Section>
);

export { Navbar };
