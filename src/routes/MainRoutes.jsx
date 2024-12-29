import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// Dashboard
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

// Leads
const AllLeads = Loadable(lazy(() => import('views/leads/AllLeads')));
const NewLead = Loadable(lazy(() => import('views/leads/NewLead')));
const ImportLeads = Loadable(lazy(() => import('views/leads/ImportLeads')));
const LeadSources = Loadable(lazy(() => import('views/leads/LeadSources')));

// Clients
const AllClients = Loadable(lazy(() => import('views/clients/AllClients')));
const AddClient = Loadable(lazy(() => import('views/clients/AddClient')));

// Pipeline
const PipelineOverview = Loadable(lazy(() => import('views/pipeline/Overview')));
const StagesManagement = Loadable(lazy(() => import('views/pipeline/StagesManagement')));

// Marketing
const EmailCampaigns = Loadable(lazy(() => import('views/marketing/EmailCampaigns')));
const SmsCampaigns = Loadable(lazy(() => import('views/marketing/SmsCampaigns')));
const Templates = Loadable(lazy(() => import('views/marketing/Templates')));

// Tasks & Calendar
const TaskManagement = Loadable(lazy(() => import('views/tasks/TaskManagement')));
const Calendar = Loadable(lazy(() => import('views/tasks/Calendar')));

// Reports
const LeadReports = Loadable(lazy(() => import('views/reports/LeadReports')));
const SalesReports = Loadable(lazy(() => import('views/reports/SalesReports')));
const CustomReports = Loadable(lazy(() => import('views/reports/CustomReports')));

// Tools & Integrations
const ApiSettings = Loadable(lazy(() => import('views/tools/ApiSettings')));
const ThirdPartyApps = Loadable(lazy(() => import('views/tools/ThirdPartyApps')));

// User Management
const AllUsers = Loadable(lazy(() => import('views/users/AllUsers')));
const RolesPermissions = Loadable(lazy(() => import('views/users/RolesPermissions')));

// Settings
const GeneralSettings = Loadable(lazy(() => import('views/settings/GeneralSettings')));
const NotificationSettings = Loadable(lazy(() => import('views/settings/NotificationSettings')));
const Compliance = Loadable(lazy(() => import('views/settings/Compliance')));

// Documentation
const Documentation = Loadable(lazy(() => import('views/documentation')));
const Calculator = Loadable(lazy(() => import('views/leads/Calculator')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'leads',
      children: [
        { path: 'all', element: <AllLeads /> },
        { path: 'new', element: <NewLead /> },
        { path: 'import', element: <ImportLeads /> },
        { path: 'sources', element: <LeadSources /> }
      ]
    },
    {
      path: 'clients',
      children: [
        { path: 'all', element: <AllClients /> },
        { path: 'add', element: <AddClient /> }
      ]
    },
    {
      path: 'pipeline',
      children: [
        { path: 'overview', element: <PipelineOverview /> },
        { path: 'stages', element: <StagesManagement /> }
      ]
    },
    {
      path: 'marketing',
      children: [
        { path: 'email', element: <EmailCampaigns /> },
        { path: 'sms', element: <SmsCampaigns /> },
        { path: 'templates', element: <Templates /> }
      ]
    },
    {
      path: 'tasks',
      children: [
        { path: 'management', element: <TaskManagement /> },
        { path: 'calendar', element: <Calendar /> }
      ]
    },
    {
      path: 'reports',
      children: [
        { path: 'leads', element: <LeadReports /> },
        { path: 'sales', element: <SalesReports /> },
        { path: 'custom', element: <CustomReports /> }
      ]
    },
    {
      path: 'tools',
      children: [
        { path: 'api', element: <ApiSettings /> },
        { path: 'apps', element: <ThirdPartyApps /> }
      ]
    },
    {
      path: 'users',
      children: [
        { path: 'all', element: <AllUsers /> },
        { path: 'roles', element: <RolesPermissions /> }
      ]
    },
    {
      path: 'settings',
      children: [
        { path: 'general', element: <GeneralSettings /> },
        { path: 'notifications', element: <NotificationSettings /> },
        { path: 'compliance', element: <Compliance /> }
      ]
    },
    {
      path: 'documentation',
      children: [
        { path: '', element: <Documentation /> },
        { path: 'calculator', element: <Calculator /> }
      ]
    }
  ]
};

export default MainRoutes;