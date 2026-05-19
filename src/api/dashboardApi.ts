import type { Dashboard, DashboardQuery, Filters } from '../types/dashboard';

const apiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:5078';

export const dashboardApi = {
  getFilters: () => requestJson<Filters>(`${apiUrl}/api/dashboard/filters`),
  getDashboard: (query: DashboardQuery) => {
    const params = new URLSearchParams({
      clientId: query.clientId,
      companyId: query.companyId,
      period: query.period,
      userId: query.userId,
    });

    return requestJson<Dashboard>(`${apiUrl}/api/dashboard?${params}`);
  },
};

async function requestJson<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Falha ao carregar dados: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
