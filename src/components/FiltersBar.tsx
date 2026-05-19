import { SelectField } from './SelectField';
import type { DashboardQuery, FilterOption, Filters } from '../types/dashboard';

type FiltersBarProps = {
  filters: Filters;
  query: DashboardQuery;
  userOptions: FilterOption[];
  onChange: (changes: Partial<DashboardQuery>) => void;
};

export function FiltersBar({ filters, onChange, query, userOptions }: FiltersBarProps) {
  return (
    <section className="filters" aria-label="Filtros do dashboard">
      <SelectField label="Cliente" value={query.clientId} options={filters.clients} onChange={(clientId) => onChange({ clientId })} />
      <SelectField label="Empresa" value={query.companyId} options={filters.companies} onChange={(companyId) => onChange({ companyId })} />
      <SelectField label="Período" value={query.period} options={filters.periods} onChange={(period) => onChange({ period })} />
      <SelectField label="Usuário" value={query.userId} options={userOptions} onChange={(userId) => onChange({ userId })} />
    </section>
  );
}
