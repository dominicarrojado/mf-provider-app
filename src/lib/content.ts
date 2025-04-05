import {
  CalculatorIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  HomeIcon,
  LightBulbIcon,
  MagnifyingGlassCircleIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { NavGroupItems } from './types';

export const NAV_GROUP_ITEMS: NavGroupItems = [
  {
    title: 'New Home',
    items: [
      {
        type: 'link',
        icon: CheckCircleIcon,
        text: 'Get Pre-Qualified',
        href: '#',
        isNew: true,
      },
      {
        type: 'link',
        icon: HomeIcon,
        text: 'Check New Home Rates',
        href: '#',
      },
    ],
  },
  {
    title: 'Refinance',
    items: [
      {
        type: 'link',
        icon: SparklesIcon,
        text: 'Track Your Savings',
        href: '#',
      },
      {
        type: 'link',
        icon: CurrencyDollarIcon,
        text: 'Check Refinance Rates',
        href: '#',
      },
    ],
  },
  {
    title: 'Get Rates',
    items: [
      {
        type: 'link',
        icon: MagnifyingGlassCircleIcon,
        text: 'View Loan Packages',
        href: '#',
      },
    ],
  },
  {
    title: 'Calculators',
    items: [
      {
        type: 'link',
        icon: CalculatorIcon,
        text: 'Affordability',
        href: '#',
      },
      {
        type: 'link',
        icon: CalculatorIcon,
        text: 'Mortgage Repayment',
        href: '#',
      },
      {
        type: 'link',
        icon: CalculatorIcon,
        text: 'Stamp Duty',
        href: '#',
      },
    ],
  },
  {
    title: 'Learn',
    items: [
      {
        type: 'header',
        icon: LightBulbIcon,
        text: 'Popular Reads',
        href: '#',
      },
      {
        type: 'link',
        icon: LightBulbIcon,
        text: 'What to expect in 2024?',
        href: '#',
      },
      {
        type: 'link',
        icon: LightBulbIcon,
        text: 'SIBOR to SORA transition',
        href: '#',
      },
      {
        type: 'link',
        icon: LightBulbIcon,
        text: 'Refinancing vs. Repricing',
        href: '#',
      },
      {
        type: 'divider',
      },
      {
        type: 'link',
        icon: LightBulbIcon,
        text: 'Read Mortgage Guides',
        href: '#',
      },
    ],
  },
  {
    title: 'More',
    items: [
      {
        type: 'link',
        icon: HomeIcon,
        text: 'Go To Home Search',
        href: '#',
      },
      {
        type: 'link',
        icon: UserGroupIcon,
        text: 'Home Services',
        href: '#',
        isNew: true,
      },
    ],
  },
];
export const NAV_GROUP_ITEMS_LENGTH = NAV_GROUP_ITEMS.length;
