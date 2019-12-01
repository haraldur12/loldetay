import React, { FunctionComponent } from 'react';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

const TutorialChampion: FunctionComponent<{ champName: string; summonerSpells: number[] }> = ({ champName }) => {
    return (
        <>
            <div className="tutorial-page-header">{champName}</div>
            <Link to={`/champion/${champName}`}>
                <img
                    data-tip={champName}
                    src={`http://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/${champName}.png`}
                />
                <ReactTooltip />
            </Link>
        </>
    );
};

export { TutorialChampion };
