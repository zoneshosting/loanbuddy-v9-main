import { IconGitBranch, IconSettings } from '@tabler/icons-react';

const pipeline = {
  id: 'pipeline',
  title: 'Pipeline',
  type: 'group',
  children: [
    {
      id: 'pipeline-overview',
      title: 'Overview',
      type: 'item',
      url: '/pipeline/overview',
      icon: IconGitBranch // Changed from IconPipeline to IconGitBranch
    },
    {
      id: 'stages-management',
      title: 'Stages Management',
      type: 'item',
      url: '/pipeline/stages',
      icon: IconSettings
    }
  ]
};

export default pipeline;