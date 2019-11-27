type Spell = {
    image: {
        group: string;
        full: string;
    };
    id: string;
    name: string;
    description: string;
};
type Stats = {
    [key: string]: string;
};

interface Champion {
    name: string;
    title: string;
    blurb?: string;
    id?: string;
    lore?: string;
    image?: {
        full: string;
        sprite: string;
    };
    spells: Array<Spell>;
    stats: Stats;
    allytips: string[];
    enemytips: string[];
}
