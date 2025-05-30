import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { HTMLProps } from 'react';

export type NavItem = {
  type: 'link' | 'header' | 'divider';
  icon?: typeof CheckCircleIcon;
  text?: string;
  href?: string;
  isExternal?: boolean;
  isNew?: boolean;
};

export type NavGroup = {
  title: string;
  items: Array<NavItem>;
};

export type NavGroupItems = Array<NavGroup>;

export type PageHeaderProps = {
  brandAnchor: HTMLProps<HTMLAnchorElement>;
};
