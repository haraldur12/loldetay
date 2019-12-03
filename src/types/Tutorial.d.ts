interface Tutorial {
    champion: string;
    createdAt: {
        seconds: number;
    };
    summonerSpells: string[];
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
