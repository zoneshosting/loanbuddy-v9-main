import { IconUsers, IconNotes, IconCalculator, IconChartBar } from '@tabler/icons-react';

const icons = {
  IconUsers,
  IconNotes, 
  IconCalculator,
  IconChartBar
};

const leads = {
  id: 'leads',
  title: 'Lead Management',
  type: 'group',
  children: [
    {
      id: 'active-leads',
      title: 'Active Leads',
      type: 'item',
      url: '/leads/active',
      icon: icons.IconUsers,
      breadcrumbs: false
    },
    {
      id: 'notes',
      title: 'Lead Notes',
      type: 'item', 
      url: '/leads/notes',
      icon: icons.IconNotes,
      breadcrumbs: false
    },
    {
      id: 'calculator',
      title: 'Mortgage Calculator',
      type: 'item',
      url: '/leads/calculator', 
      icon: icons.IconCalculator,
      breadcrumbs: false
    },
    {
      id: 'reports',
      title: 'Reports & Analytics',
      type: 'item',
      url: '/leads/reports',
      icon: icons.IconChartBar,
      breadcrumbs: false
    }
  ]
};

export default leads;