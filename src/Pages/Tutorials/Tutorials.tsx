import React, { FunctionComponent, useEffect, useState } from 'react';
import { withFirebase } from '../../services';
import './Tutorials.css';
import { Link } from 'react-router-dom';

const TutorialsPage: FunctionComponent<{ firebase: any; match: any }> = props => {
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
        },
    ]);
    useEffect(() => {
        props.firebase.getData().then((data: any) => {
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
                        <Link to={`/tutorial/${id}`} key={id}>
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
                                <p className="tutorials-list-item-text">{description}</p>
                                <span className="tutorials-list-item-date">{date}</span>
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};

export const Tutorials = withFirebase(TutorialsPage);
