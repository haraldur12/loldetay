import React, { FunctionComponent, useState, useEffect } from 'react';
import { getChampions } from './utilities/getChampions';
import { Champion } from './Champion';

interface Champion {
    [index: string]: {
        name: string;
        title: string;
        blurb: string;
        id: string;
        image: {
            full: string;
            sprite: string;
        };
    };
}

const Champions: FunctionComponent = () => {
    const [champions, setChampions] = useState<Champion>({});
    useEffect(() => {
        getChampions().then(res => {
            setChampions(res.data);
        });
    }, []);

    return (
        <div className="champions-index">
            {Object.keys(champions).map((championName: string) => {
                return <Champion champName={championName} key={championName} />;
            })}
        </div>
    );
};

export { Champions };
