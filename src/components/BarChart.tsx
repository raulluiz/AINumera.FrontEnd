import type { UserComparison } from '../types/dashboard';
import { formatMinutes } from '../utils/formatters';

type BarChartProps = {
  items: UserComparison[];
};

export function BarChart({ items }: BarChartProps) {
  const max = Math.max(1, ...items.map((item) => item.activeMinutes));

  return (
    <div className="bars">
      {items.map((item) => (
        <div className="barRow" key={item.userName}>
          <span>{item.userName}</span>
          <div><i style={{ width: `${(item.activeMinutes / max) * 100}%` }} /></div>
          <strong>{formatMinutes(item.activeMinutes)}</strong>
        </div>
      ))}
    </div>
  );
}
