import type { DashboardQuery } from '../types/dashboard';

export const DEFAULT_DASHBOARD_QUERY: DashboardQuery = {
  clientId: 'client-acme',
  companyId: 'company-north',
  period: 'month',
  userId: 'all',
};

export const ALL_USERS_OPTION = { id: 'all', name: 'Todos' } as const;
