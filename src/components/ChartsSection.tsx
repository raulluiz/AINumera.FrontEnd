import { BarChart } from './BarChart';
import { LineChart } from './LineChart';
import { StatCard } from './StatCard';
import type { Dashboard } from '../types/dashboard';
import { formatMoney } from '../utils/formatters';

type ChartsSectionProps = {
  dashboard: Dashboard;
};

export function ChartsSection({ dashboard }: ChartsSectionProps) {
  return (
    <section className="charts">
      <section className="panel">
        <h2>Distribuição Diária de Uso por Usuário</h2>
        <LineChart data={dashboard.dailyUsage} users={dashboard.users} />
      </section>

      <section className="panel capacity">
        <h2>Capacidade da Máquina x Equivalência Humana</h2>
        <div className="capacityStats">
          <StatCard label="Conclusões pela máquina / dia" value={dashboard.machineCapacity.machineEntriesPerDay.toLocaleString('pt-BR')} />
          <StatCard label="Equivalente humano estimado" value={`${dashboard.machineCapacity.equivalentHumanAnalysts} analistas`} />
          <StatCard label="Economia mensal estimada" value={formatMoney(dashboard.savings.monthly)} />
        </div>
        <BarChart items={dashboard.userComparison} />
      </section>

      <section className="panel savingsPanel">
        <h2>Economia Gerada</h2>
        <div className="savingsGrid">
          <StatCard label="Por dia" value={formatMoney(dashboard.savings.daily)} />
          <StatCard label="Por mês" value={formatMoney(dashboard.savings.monthly)} />
          <StatCard label="Por ano" value={formatMoney(dashboard.savings.yearly)} />
          <StatCard label="No período" value={formatMoney(dashboard.savings.period)} />
        </div>
      </section>
    </section>
  );
}
