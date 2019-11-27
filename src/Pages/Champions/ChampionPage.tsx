import React, { FunctionComponent, useEffect, useState } from 'react';
import { getChampion } from './utilities/getChampion';
import { ChampionStats, ChampionSpells, ChampionTips } from './components';

import './ChampionPage.css';

const ChampionPage: FunctionComponent<{ match: any }> = ({ match }) => {
    const name = match.params.name;
    const [champion, setChampions] = useState<Champion>({
        name: '',
        title: '',
        blurb: '',
        id: '',
        image: {
            full: '',
            sprite: '',
        },
        spells: [],
        stats: {
            hp: '',
            mp: '',
        },
        lore: '',
        allytips: [''],
        enemytips: [],
    });
    useEffect(() => {
        getChampion(name).then(res => {
            setChampions(res.data[name]);
        });
    }, []);
    const { spells, name: championName, title, stats, allytips, enemytips } = champion;

    return (
        <div
            className="champion-page"
            style={{
                backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_1.jpg)`,
            }}
        >
            <div className="champion-page-lore">
                <div className="champion-page-title">
                    {championName} - {title}
                </div>
                <img
                    className="champion-page-image"
                    src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`}
                />
                <div className="champion-page-lore-info">{champion.lore}</div>
            </div>
            <ChampionStats stats={stats} />
            <ChampionSpells spells={spells} />
            <ChampionTips allytips={allytips} enemytips={enemytips} />
        </div>
    );
};

export { ChampionPage };
