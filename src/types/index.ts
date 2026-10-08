export interface MemoryPhoto {
  id: number;
  url: string;
  title: string;
  tag: string;
  description: string;
}

export interface MetricCardData {
  title: string;
  value: string;
  subtitle: string;
}

export interface DailyEnergyPoint {
  time: string;
  workEnergy: number;
  badmintonEnergy: number;
}

export interface ColleagueTrait {
  trait: string;
  score: number;
}
