import { ChartsSection } from './components/ChartsSection';
import { FiltersBar } from './components/FiltersBar';
import { SummaryPanel } from './components/SummaryPanel';
import { UserDetailsPanel } from './components/UserDetailsPanel';
import { useDashboard } from './hooks/useDashboard';

export function App() {
  const { dashboard, error, filters, isLoading, query, updateQuery, userOptions } = useDashboard();

  if (error) {
    return (
      <main className="shell loading">
        <div className="errorBox">{error}</div>
      </main>
    );
  }

  if (isLoading || !filters || !dashboard) {
    return <main className="shell loading">Carregando dashboard...</main>;
  }

  return (
    <main className="shell">
      <FiltersBar filters={filters} query={query} userOptions={userOptions} onChange={updateQuery} />
      <SummaryPanel summary={dashboard.summary} />

      <section className="contentGrid">
        <UserDetailsPanel users={dashboard.users} />
        <ChartsSection dashboard={dashboard} />
      </section>
    </main>
  );
}
