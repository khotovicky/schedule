export type Event = {
  title: string;
  description: string;
  time: Date;
};

export type Day = {
  title: string | null;
  description: string | null;
  events: Event[] | null;
};
