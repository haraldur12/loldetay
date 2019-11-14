import React, { FunctionComponent } from 'react';
import { IMAGES } from '../constants';
import './ChampionStats.css';

const ChampionStats: FunctionComponent<{ stats: { [key: string]: string } }> = ({ stats }) => {
    const neededFields = ['hp', 'mp', 'range', 'attackdamage', 'attackspeed', 'hpregen', 'armor', 'crit'];
    return (
        <div className="champion-page-stats">
            {Object.keys(stats).map((stat: string) => {
                if (neededFields.includes(stat)) {
                    return (
                        <div key={stat} className="champion-page-stat">
                            <img
                                className="champion-page-stats-icon"
                                src={`${process.env.PUBLIC_URL}/stats/${IMAGES[stat].icon}`}
                            />
                            <span className="champion-page-stats-name">{IMAGES[stat].name}</span>
                            <span>{stats[stat]}</span>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export { ChampionStats };
