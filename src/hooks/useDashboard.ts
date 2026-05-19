import { useCallback, useEffect, useMemo, useState } from 'react';
import { dashboardApi } from '../api/dashboardApi';
import { ALL_USERS_OPTION, DEFAULT_DASHBOARD_QUERY } from '../constants/dashboardDefaults';
import type { Dashboard, DashboardQuery, Filters } from '../types/dashboard';

export function useDashboard() {
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters | null>(null);
  const [isDashboardLoading, setIsDashboardLoading] = useState(true);
  const [isFiltersLoading, setIsFiltersLoading] = useState(true);
  const [query, setQuery] = useState<DashboardQuery>(DEFAULT_DASHBOARD_QUERY);

  useEffect(() => {
    let isCurrentRequest = true;

    setIsFiltersLoading(true);
    dashboardApi.getFilters()
      .then((data) => {
        if (isCurrentRequest) {
          setFilters(data);
        }
      })
      .catch(() => setError('Não foi possível carregar os filtros do dashboard.'))
      .finally(() => {
        if (isCurrentRequest) {
          setIsFiltersLoading(false);
        }
      });

    return () => {
      isCurrentRequest = false;
    };
  }, []);

  useEffect(() => {
    let isCurrentRequest = true;

    setIsDashboardLoading(true);
    dashboardApi.getDashboard(query)
      .then((data) => {
        if (isCurrentRequest) {
          setDashboard(data);
        }
      })
      .catch(() => setError('Não foi possível carregar os indicadores do dashboard.'))
      .finally(() => {
        if (isCurrentRequest) {
          setIsDashboardLoading(false);
        }
      });

    return () => {
      isCurrentRequest = false;
    };
  }, [query]);

  const updateQuery = useCallback((changes: Partial<DashboardQuery>) => {
    setQuery((current) => ({ ...current, ...changes }));
  }, []);

  const userOptions = useMemo(() => [ALL_USERS_OPTION, ...(filters?.users ?? [])], [filters]);

  return {
    dashboard,
    error,
    filters,
    isLoading: isFiltersLoading || isDashboardLoading,
    query,
    updateQuery,
    userOptions,
  };
}
