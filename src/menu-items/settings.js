import { IconSettings, IconBell, IconShieldCheck } from '@tabler/icons-react';

const settings = {
  id: 'settings',
  title: 'Settings',
  type: 'group',
  children: [
    {
      id: 'general-settings',
      title: 'General Settings',
      type: 'item',
      url: '/settings/general',
      icon: IconSettings
    },
    {
      id: 'notification-settings',
      title: 'Notification Settings',
      type: 'item',
      url: '/settings/notifications',
      icon: IconBell
    },
    {
      id: 'compliance',
      title: 'Compliance',
      type: 'item',
      url: '/settings/compliance',
      icon: IconShieldCheck
    }
  ]
};

export default settings;