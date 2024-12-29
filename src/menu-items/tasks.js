import { IconChecklist, IconCalendar } from '@tabler/icons-react';

const tasks = {
  id: 'tasks',
  title: 'Tasks & Calendar',
  type: 'group',
  children: [
    {
      id: 'task-management',
      title: 'Task Management',
      type: 'item',
      url: '/tasks/management',
      icon: IconChecklist
    },
    {
      id: 'calendar',
      title: 'Calendar',
      type: 'item',
      url: '/tasks/calendar',
      icon: IconCalendar
    }
  ]
};

export default tasks;