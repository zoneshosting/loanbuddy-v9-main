import { IconApi, IconApps } from '@tabler/icons-react';

const tools = {
  id: 'tools',
  title: 'Tools & Integrations',
  type: 'group',
  children: [
    {
      id: 'api-settings',
      title: 'API Settings',
      type: 'item',
      url: '/tools/api',
      icon: IconApi
    },
    {
      id: 'third-party-apps',
      title: 'Third-Party Apps',
      type: 'item',
      url: '/tools/apps',
      icon: IconApps
    }
  ]
};

export default tools;