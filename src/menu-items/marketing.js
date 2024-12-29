import { IconMail, IconMessage, IconTemplate } from '@tabler/icons-react';

const marketing = {
  id: 'marketing',
  title: 'Marketing',
  type: 'group',
  children: [
    {
      id: 'email-campaigns',
      title: 'Email Campaigns',
      type: 'item',
      url: '/marketing/email',
      icon: IconMail
    },
    {
      id: 'sms-campaigns',
      title: 'SMS Campaigns',
      type: 'item',
      url: '/marketing/sms',
      icon: IconMessage
    },
    {
      id: 'templates',
      title: 'Templates',
      type: 'item',
      url: '/marketing/templates',
      icon: IconTemplate
    }
  ]
};

export default marketing;