import React, { FunctionComponent, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';
import './TutorialChampion.css';
import { getSummonerSpells } from '../../utilities';

type SummonerSpells = {
    [key: string]: {
        id: string;
        name: string;
    };
};
const TutorialChampion: FunctionComponent<{ champName: string; summonerSpells: string[] }> = ({
    champName,
    summonerSpells,
}) => {
    const [spells, setSpells] = useState<SummonerSpells>({
        SummonerFlash: {
            name: '',
            id: '',
        },
    });
    getSummonerSpells().then(res => {
        setSpells(res);
    });
    return (
        <div className="tutorial-page-champion">
            <div className="tutorial-page-champion-image">
                <div className="tutorial-page-champion-header">{champName}</div>
                <Link to={`/champion/${champName}`}>
                    <img
                        data-tip={champName}
                        src={`https://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/${champName}.png`}
                    />
                    <ReactTooltip />
                </Link>
            </div>
            <div className="tutorial-page-champion-spells">
                <div className="tutorial-page-champion-header">Summoner Buyuleri</div>
                <div className="tutorial-page-champion-spells-block">
                    {summonerSpells.map(spell => {
                        const currentSummonerSpell = spells[spell];
                        if (currentSummonerSpell) {
                            return (
                                <>
                                    <img
                                        key={spell}
                                        data-tip={currentSummonerSpell.name}
                                        src={`https://ddragon.leagueoflegends.com/cdn/9.22.1/img/spell/${spell}.png`}
                                    />
                                    <ReactTooltip />
                                </>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export { TutorialChampion };
