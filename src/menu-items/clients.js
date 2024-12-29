import { IconUsers, IconUserPlus } from '@tabler/icons-react';

const clients = {
  id: 'clients',
  title: 'Clients',
  type: 'group',
  children: [
    {
      id: 'all-clients',
      title: 'All Clients',
      type: 'item',
      url: '/clients/all',
      icon: IconUsers
    },
    {
      id: 'add-client',
      title: 'Add Client',
      type: 'item',
      url: '/clients/add',
      icon: IconUserPlus
    }
  ]
};

export default clients;