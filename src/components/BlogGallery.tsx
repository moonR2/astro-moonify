import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import format from 'date-fns/format';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

declare type IBlogCardProps = {
  instance: MarkdownInstance<IFrontmatter>;
};

const BlogCard = (props: IBlogCardProps) => (
  <a
    className="rounded-md transition-all hover:ring-2 hover:ring-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    href={props.instance.url}
  >
    <div className="min-h-full overflow-hidden rounded-md bg-base-300 text-base-content shadow-xl">
      <div className="aspect-w-3 aspect-h-2">
        <img
          className="h-full w-full object-cover object-center"
          src={props.instance.frontmatter.imgSrc}
          alt={props.instance.frontmatter.imgAlt}
          loading="lazy"
        />
      </div>
      <div className="px-3 pt-4 pb-6 text-center">
        <h2 className="text-xl font-semibold group-hover:text-primary-focus">
          {props.instance.frontmatter.title}
        </h2>
        <div className="mt-1 text-xs text-gray-400">
          {format(new Date(props.instance.frontmatter.pubDate), 'LLL d, yyyy')}
        </div>
        <div className="mt-2 text-sm">
          {props.instance.frontmatter.description}
        </div>
      </div>
    </div>
  </a>
);

const BlogGallery = (props: IRecentPostsProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {props.postList.map((elt, index) => (
      <BlogCard key={index} instance={elt} />
    ))}
  </div>
);

export { BlogGallery };
