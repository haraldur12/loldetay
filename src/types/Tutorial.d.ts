interface Tutorial {
    champion: string;
    createdAt: {
        seconds: number;
    };
    spells: {
        [key: string]: number[];
    };
    description: string;
    data: ChampionData;
    id: string;
    items: {
        [key: string]: number[];
    };
}
