import React, { FunctionComponent, useEffect, useState } from 'react';
import { withFirebase } from '../../services';
import './Tutorials.css';
import { getChampion } from './utilities/getChampion';

type ChampionData = {
    blurb: string;
};
type Tutorial = {
    champion: string;
    itemIds: string[];
    createdAt: {
        seconds: number;
    };
    description: string;
    data: ChampionData;
};

const TutorialsPage: FunctionComponent<{ firebase: any; match: any }> = props => {
    const [tutorials, setTutorials] = useState([
        {
            champion: 'Teemo',
            itemIds: [],
            data: {
                blurb: '',
            },
            description: '',
            createdAt: {
                seconds: 0,
            },
        },
    ]);
    useEffect(() => {
        props.firebase.getData().then((data: any) => {
            setTutorials(data);
        });
    }, []);
    return (
        <div className="tutorials-page">
            <section className="tutorial-list gray">
                <ul className="news-list">
                    {tutorials.map((tutorial: Tutorial) => {
                        const { champion, description, createdAt } = tutorial;
                        const date = new Date(createdAt.seconds * 1000).toDateString();
                        return (
                            <li key={champion} className="determine-hover enable-hover" data-type="article">
                                <a className="history-link" title={champion} href="#">
                                    <div className="canvas-background">
                                        <div className="stalker-wrap"></div>
                                    </div>
                                    <div className="gradient-hover gradient-1"></div>
                                    <div className="constrain">
                                        <img
                                            src={`http://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/${champion}.png`}
                                        />
                                        <p>{description}</p>
                                        <span className="date">{date}</span>
                                    </div>
                                    <div className="gradient-hover gradient-2"></div>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </div>
    );
};

export const Tutorials = withFirebase(TutorialsPage);
