export type DashboardQuery = {
  clientId: string;
  companyId: string;
  period: string;
  userId: string;
};

export type FilterOption = {
  id: string;
  name: string;
};

export type Filters = {
  clients: FilterOption[];
  companies: FilterOption[];
  users: FilterOption[];
  periods: FilterOption[];
};

export type Dashboard = {
  summary: DashboardSummary;
  users: UserUsage[];
  dailyUsage: DailyUsage[];
  userComparison: UserComparison[];
  machineCapacity: MachineCapacity;
  savings: SavingsBreakdown;
};

export type DashboardSummary = {
  totalActiveMinutes: number;
  averageMinutesPerUser: number;
  sessions: number;
  activeUsers: number;
  inactiveUsers: number;
  machineMinutes: number;
  estimatedSavings: number;
  savingsScope: string;
};

export type UserUsage = {
  id: string;
  name: string;
  lastLogin: string;
  totalMinutes: number;
  averageMinutesPerDay: number;
  machineMinutes: number;
  sessions: number;
  isActive: boolean;
  estimatedSavings: number;
};

export type DailyUsage = {
  day: string;
  users: UserDailyMinutes[];
};

export type UserDailyMinutes = {
  userId: string;
  userName: string;
  minutes: number;
};

export type UserComparison = {
  userName: string;
  activeMinutes: number;
  machineMinutes: number;
  savings: number;
};

export type MachineCapacity = {
  machineEntriesPerDay: number;
  equivalentHumanAnalysts: number;
  manualHoursEquivalent: number;
  machineHours: number;
  entriesProcessed: number;
};

export type SavingsBreakdown = {
  daily: number;
  monthly: number;
  yearly: number;
  period: number;
};
