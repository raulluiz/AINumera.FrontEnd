import type { UserUsage } from '../types/dashboard';
import { formatDate, formatMinutes, formatMoney } from '../utils/formatters';

type UserCardProps = {
  user: UserUsage;
};

export function UserCard({ user }: UserCardProps) {
  return (
    <article className="userCard">
      <div className="userTop">
        <div>
          <strong>{user.name}</strong>
          <span>Último login: {formatDate(user.lastLogin)}</span>
        </div>
        <mark className={user.isActive ? 'active' : 'inactive'}>{user.isActive ? 'Ativo' : 'Inativo'}</mark>
      </div>

      <dl>
        <div><dt>Tempo total</dt><dd>{formatMinutes(user.totalMinutes)}</dd></div>
        <div><dt>Média por dia</dt><dd>{formatMinutes(user.averageMinutesPerDay)}</dd></div>
        <div><dt>Tempo máquina</dt><dd>{formatMinutes(user.machineMinutes)}</dd></div>
        <div><dt>Economia</dt><dd>{formatMoney(user.estimatedSavings)}</dd></div>
        <div><dt>Sessões realizadas</dt><dd>{user.sessions}</dd></div>
      </dl>
    </article>
  );
}
