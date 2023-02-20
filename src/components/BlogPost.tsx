import type { ReactNode } from 'react';

import type { IFrontmatter } from '@/types/IFrontmatter';
import { AppConfig } from '@/utils/AppConfig';

import { PostContent } from './PostContent';
import { PostHeader } from './PostHeader';
import { Section } from './Section';

type IBlogPostProps = {
  frontmatter: IFrontmatter;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <PostHeader content={props.frontmatter} author={AppConfig.author} />

    <PostContent content={props.frontmatter}>{props.children}</PostContent>
  </Section>
);

export { BlogPost };
