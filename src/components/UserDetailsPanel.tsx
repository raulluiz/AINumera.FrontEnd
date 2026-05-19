import { UserCard } from './UserCard';
import type { UserUsage } from '../types/dashboard';

type UserDetailsPanelProps = {
  users: UserUsage[];
};

export function UserDetailsPanel({ users }: UserDetailsPanelProps) {
  return (
    <section className="panel usersPanel">
      <h2>Detalhamento por Usuário</h2>
      <div className="userList">
        {users.map((user) => <UserCard key={user.id} user={user} />)}
      </div>
    </section>
  );
}
