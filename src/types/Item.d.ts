interface Items {
    [index: string]: {
        name: string;
        description: string;
        tags: string[];
        id: number;
    };
}

interface Item {
    name: string;
    description: string;
    tags: string[];
    id: number;
}
