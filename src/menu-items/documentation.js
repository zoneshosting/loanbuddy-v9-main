import { IconBook, IconCalculator } from '@tabler/icons-react';

const documentation = {
  id: 'documentation',
  title: 'Documentation',
  type: 'group',
  children: [
    {
      id: 'docs',
      title: 'Documentation',
      type: 'item',
      url: '/documentation',
      icon: IconBook
    },
    {
      id: 'mortgage-calculator',
      title: 'Mortgage Calculator',
      type: 'item',
      url: '/documentation/calculator',
      icon: IconCalculator
    }
  ]
};

export default documentation;