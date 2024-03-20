export interface Serie {
  id: number;
  title: string;
  channel: string;
  gender: string;
  schedules: Schedule[];
}

export interface Schedule {
  id: number;
  week_day: string;
  show_time: string;
}
