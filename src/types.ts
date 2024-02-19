export type Event = {
  title: string;
  description: string;
  time: string;
};

export type Day = {
  date: string;
  title: string | null;
  description: string | null;
  events: Event[] | null;
};
