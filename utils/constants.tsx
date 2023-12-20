import { SideNavItem } from './types';

import { LucideFolder, LucideHelpCircle, LucideHome, LucideLayoutDashboard, LucideMail, LucidePlane, LucideSettings } from 'lucide-react';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <LucideLayoutDashboard width="20" height="20" />,
  },
  {
    title: 'Budget Planner',
    path: '/projects',
    icon: <LucidePlane width="20" height="20" />,
  },
  {
    title: 'Transactions',
    path: '/messages',
    icon: <LucideMail width="20" height="20" />,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <LucideSettings width="20" height="20" />
  },
  {
    title: 'Help',
    path: '/help',
    icon: <LucideHelpCircle width="20" height="20" />,
  },
];
