import { Activity, Bot, Clock3, Coins, LogIn, Users } from 'lucide-react';
import { DashboardHeader } from './DashboardHeader';
import { MetricCard } from './MetricCard';
import type { DashboardSummary } from '../types/dashboard';
import { formatMinutes, formatMoney } from '../utils/formatters';

type SummaryPanelProps = {
  summary: DashboardSummary;
};

export function SummaryPanel({ summary }: SummaryPanelProps) {
  const totalUsers = summary.activeUsers + summary.inactiveUsers;

  return (
    <section className="panel">
      <DashboardHeader />

      <section className="kpis">
        <MetricCard tone="amber" icon={<Clock3 />} label="Tempo Total Ativo" value={formatMinutes(summary.totalActiveMinutes)} hint="Tempo total somado no período" />
        <MetricCard tone="green" icon={<Users />} label="Média por Usuário" value={formatMinutes(summary.averageMinutesPerUser)} hint="Média no período selecionado" />
        <MetricCard tone="blue" icon={<Activity />} label="Sessões por Usuário" value={summary.sessions.toString()} hint="Total de sessões realizadas" />
        <MetricCard tone="indigo" icon={<LogIn />} label="Usuários Ativos" value={`${summary.activeUsers}/${totalUsers}`} hint="Login nos últimos 7 dias" />
        <MetricCard tone="purple" icon={<Bot />} label="Tempo Máquina Operou" value={formatMinutes(summary.machineMinutes)} hint="Processamento automático no período" />
        <MetricCard tone="mint" icon={<Coins />} label="Total Economizado" value={formatMoney(summary.estimatedSavings)} hint={summary.savingsScope} />
      </section>
    </section>
  );
}
