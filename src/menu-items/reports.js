import { IconReportAnalytics, IconChartBar, IconReportMoney } from '@tabler/icons-react';

const reports = {
  id: 'reports',
  title: 'Reports & Analytics',
  type: 'group',
  children: [
    {
      id: 'lead-reports',
      title: 'Lead Reports',
      type: 'item',
      url: '/reports/leads',
      icon: IconReportAnalytics
    },
    {
      id: 'sales-reports',
      title: 'Sales Reports',
      type: 'item',
      url: '/reports/sales',
      icon: IconReportMoney
    },
    {
      id: 'custom-reports',
      title: 'Custom Reports',
      type: 'item',
      url: '/reports/custom',
      icon: IconChartBar
    }
  ]
};

export default reports;