import type { ReactNode } from 'react';

type MetricTone = 'amber' | 'green' | 'blue' | 'indigo' | 'purple' | 'mint';

type MetricCardProps = {
  hint: string;
  icon: ReactNode;
  label: string;
  tone: MetricTone;
  value: string;
};

export function MetricCard({ hint, icon, label, tone, value }: MetricCardProps) {
  return (
    <article className={`kpi ${tone}`}>
      <div className="kpiIcon">{icon}</div>
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
        <span>{hint}</span>
      </div>
    </article>
  );
}
