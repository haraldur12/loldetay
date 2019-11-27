interface Tutorial {
    champion: string;
    itemIds: string[];
    createdAt: {
        seconds: number;
    };
    spells: {
        [key: string]: number[];
    };
    description: string;
    data: ChampionData;
    id: string;
}
