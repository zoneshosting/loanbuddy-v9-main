import { IconUsers, IconShield } from '@tabler/icons-react';

const users = {
  id: 'users',
  title: 'User Management',
  type: 'group',
  children: [
    {
      id: 'all-users',
      title: 'All Users',
      type: 'item',
      url: '/users/all',
      icon: IconUsers
    },
    {
      id: 'roles-permissions',
      title: 'Roles & Permissions',
      type: 'item',
      url: '/users/roles',
      icon: IconShield
    }
  ]
};

export default users;