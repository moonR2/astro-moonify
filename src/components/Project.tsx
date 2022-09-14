import type { ReactNode } from 'react';

declare type IProjectProps = {
  img: {
    src: string;
    alt: string;
  };
  name: string;
  description: string;
  link: string;
  category: ReactNode;
};

const Project = (props: IProjectProps) => (
  <div className="rounded-md transition-all hover:ring-2 hover:ring-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
    <div className="flex flex-col items-center gap-x-8 rounded-md bg-base-300 p-3 md:flex-row">
      <div className="shrink-0">
        <a href={props.link}>
          <img
            src={props.img.src}
            alt={props.img.alt}
            className="h-40 w-72"
            loading="lazy"
          />
        </a>
      </div>
      <div>
        <div className="flex flex-col items-center gap-y-2 md:flex-row">
          <a className="hover:text-primary-focus" href={props.link}>
            <div className="text-x1 font-semibold">{props.name}</div>
          </a>
          <div className="ml-3 flex gap-2">{props.category}</div>
        </div>
        <p className="mt-3 text-gray-400">{props.description}</p>
      </div>
    </div>
  </div>
);

export { Project };
