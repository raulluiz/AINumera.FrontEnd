import { CHART_COLORS } from '../constants/chartColors';
import type { DailyUsage, UserUsage } from '../types/dashboard';

type LineChartProps = {
  data: DailyUsage[];
  users: UserUsage[];
};

const width = 760;
const height = 230;
const padding = 28;

export function LineChart({ data, users }: LineChartProps) {
  const max = Math.max(1, ...data.flatMap((day) => day.users.map((user) => user.minutes)));
  const x = (index: number) => padding + (index * (width - padding * 2)) / Math.max(1, data.length - 1);
  const y = (value: number) => height - padding - (value / max) * (height - padding * 2);

  return (
    <div className="chartWrap">
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Linhas de uso diário">
        {[0, 0.25, 0.5, 0.75, 1].map((tick) => (
          <line key={tick} x1={padding} x2={width - padding} y1={y(max * tick)} y2={y(max * tick)} className="gridLine" />
        ))}

        {users.map((user, userIndex) => (
          <polyline
            key={user.id}
            points={buildUserPoints(data, user.id, x, y)}
            fill="none"
            stroke={CHART_COLORS[userIndex % CHART_COLORS.length]}
            strokeWidth="3"
            strokeLinecap="round"
          />
        ))}

        {data.map((day, index) => (
          <text key={day.day} x={x(index)} y={height - 6} textAnchor="middle">{day.day}</text>
        ))}
      </svg>

      <div className="legend">
        {users.map((user, index) => (
          <span key={user.id}><i style={{ background: CHART_COLORS[index % CHART_COLORS.length] }} />{user.name}</span>
        ))}
      </div>
    </div>
  );
}

function buildUserPoints(data: DailyUsage[], userId: string, x: (index: number) => number, y: (value: number) => number) {
  return data.map((day, dayIndex) => {
    const minutes = day.users.find((item) => item.userId === userId)?.minutes ?? 0;
    return `${x(dayIndex)},${y(minutes)}`;
  }).join(' ');
}
