import React, { FunctionComponent, useEffect, useState } from 'react';
import { withData } from '../../services';
import { getChampion } from './utilities/getChampion';
import { TutorialSpells } from './components';

import './Tutorial.css';

const TutorialPage: FunctionComponent<{ firebase: any; match: any; firestore: Firestore }> = props => {
    const tutorialId = props.match.params.id;
    const [tutorial, setTutorial] = useState<Tutorial>({
        champion: '',
        spells: {
            q: [],
            w: [],
            e: [],
            r: [],
        },
        description: '',
        createdAt: {
            seconds: 0,
        },
        itemIds: [],
        data: {},
        id: '',
    });
    const [championData, setChampionData] = useState<Champion>({
        name: '',
        spells: [],
        title: '',
        blurb: '',
        id: '',
        stats: {},
        lore: '',
        enemytips: [],
        allytips: [],
    });
    useEffect(() => {
        props.firestore.getDocumentById(tutorialId).then((doc: Tutorial) => {
            const { champion } = doc;
            getChampion(champion).then(data => {
                setTutorial(doc);
                setChampionData(data);
            });
        });
    }, []);
    const { champion, description, spells: spellsFromTutorial } = tutorial;
    const { spells: spellFromChampionData } = championData;
    return (
        <div className="tutorial-page">
            <div className="tutorial-page-block">
                <div className="tutorial-page-header">{champion}</div>
                <div className="tutorial-page-description">{description}</div>
                <div className="tutorial-page-header">Yetenekler</div>
                <div className="tutorial-page-spells">
                    <TutorialSpells
                        spellFromChampionData={spellFromChampionData}
                        spellsFromTutorial={spellsFromTutorial}
                    />
                </div>
                <div className="tutorial-page-header">Esyalar</div>
            </div>
        </div>
    );
};

const Tutorial = withData(TutorialPage);
export { Tutorial };
