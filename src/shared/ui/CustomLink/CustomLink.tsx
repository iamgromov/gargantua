import type { FC } from 'react';

interface CustomLinkProps {
  href: string;
  title: string;
}

export const CustomLink: FC<CustomLinkProps> = ({ href, title }) => {
  return (
    <a href={href} rel='noopener noreferrer' target='_blank'>
      {title}
    </a>
  );
};
