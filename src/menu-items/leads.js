import { IconUsers, IconUserPlus, IconUpload, IconSourceCode } from '@tabler/icons-react';

const leads = {
  id: 'leads',
  title: 'Leads Management',
  type: 'group',
  children: [
    {
      id: 'all-leads',
      title: 'All Leads',
      type: 'item',
      url: '/leads/all',
      icon: IconUsers
    },
    {
      id: 'new-lead',
      title: 'New Lead',
      type: 'item',
      url: '/leads/new',
      icon: IconUserPlus
    },
    {
      id: 'import-leads',
      title: 'Import Leads',
      type: 'item',
      url: '/leads/import',
      icon: IconUpload
    },
    {
      id: 'lead-sources',
      title: 'Lead Sources',
      type: 'item',
      url: '/leads/sources',
      icon: IconSourceCode
    }
  ]
};

export default leads;