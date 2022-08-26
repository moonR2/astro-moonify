import type { IFrontmatter } from 'astro-boilerplate-components';
import type { ReactNode } from 'react';

declare type IPostContentProps = {
  content: IFrontmatter;
  children: ReactNode;
};

const PostContent = (props: IPostContentProps) => (
  <div className="mx-auto mt-5 max-w-fit">
    <div className="aspect-w-4 aspect-h-2">
      <img
        className="h-full w-full rounded-lg object-cover object-center"
        src={props.content.imgSrc}
        alt={props.content.imgAlt}
        loading="lazy"
      ></img>
    </div>
    <div className="prose-invert prose mt-8 prose-img:rounded-md lg:prose-xl">
      {props.children}
    </div>
  </div>
);

export { PostContent };
