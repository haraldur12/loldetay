import React, { FunctionComponent, useEffect, useState } from 'react';
import { withData } from '../../services';
import './Tutorials.css';
import { Link } from 'react-router-dom';
import { firestore } from 'firebase';

const TutorialsPage: FunctionComponent<{ firebase: any; match: any; firestore: Firestore }> = props => {
    const [tutorials, setTutorials] = useState([
        {
            champion: 'Teemo',
            itemIds: [],
            id: '',
            data: {
                blurb: '',
            },
            spells: {},
            description: '',
            createdAt: {
                seconds: 0,
            },
            items: {},
        },
    ]);
    useEffect(() => {
        props.firestore.getData().then((data: any) => {
            setTutorials(data);
        });
    }, []);
    return (
        <div className="tutorials-page">
            <ul className="tutorials-list">
                {tutorials.map((tutorial: Tutorial) => {
                    const { champion, description, createdAt, id } = tutorial;
                    const date = new Date(createdAt.seconds * 1000).toDateString();
                    return (
                        <Link to={`/tutorial/${id}`} key={id} className="tutorials-list-item-link">
                            <li
                                key={champion}
                                className="tutorials-list-item"
                                style={{
                                    backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_1.jpg)`,
                                }}
                            >
                                <img
                                    className="tutorials-list-item-icon"
                                    src={`http://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/${champion}.png`}
                                />
                                <p className="tutorials-list-item-text">{description.substring(0, 150)}</p>
                                <span className="tutorials-list-item-date">{date}</span>
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};

export const Tutorials = withData(TutorialsPage);
