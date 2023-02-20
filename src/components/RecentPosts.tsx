import type { MarkdownInstance } from 'astro';

import type { IFrontmatter } from '@/types/IFrontmatter';

import { BlogGallery } from './BlogGallery';
import { Section } from './Section';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <span className="text-accent">Posts</span>
        </div>

        <div className="text-sm hover:text-primary-focus">
          <a href="/posts">View all Posts →</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.postList} />
  </Section>
);

export { RecentPosts };
