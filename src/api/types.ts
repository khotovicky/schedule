export type Event = {
    key: string;
    title: string;
    description: string;
    time: string;
};

export type Day = {
    date: string;
    title?: string;
    description?: string;
    events?: Event[];
};
