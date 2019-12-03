import React, { FunctionComponent, useEffect, useState } from 'react';
import { withData } from '../../services';
import { getChampion, getItems, getSummonerSpells } from './utilities';
import { TutorialSpells } from './components';

import './Tutorial.css';
import { itemPhases } from './constants';
import { TutorialItem } from './components/TutorialItem';
import { TutorialChampion } from './components/TutorialChampion';

const TUTORIAL_INITIAL = {
    champion: '',
    spells: {
        q: [],
        w: [],
        e: [],
        r: [],
    },
    summonerSpells: [],
    description: '',
    createdAt: {
        seconds: 0,
    },
    items: {
        starter: [1001],
        mid: [],
        full: [],
        towardsMid: [],
        firstBase: [],
        situational: [],
    },
    data: {},
    id: '',
};

const TutorialPage: FunctionComponent<{ firebase: any; match: any; firestore: Firestore }> = props => {
    const tutorialId = props.match.params.id;

    const [items, setItems] = useState<Items>({});

    const [tutorial, setTutorial] = useState<Tutorial>(TUTORIAL_INITIAL);

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
            getItems().then(res => {
                setItems(res.data);
            });
        });
    }, []);

    const { champion, description, spells: spellsFromTutorial, items: itemsFromTutorial, summonerSpells } = tutorial;

    const { spells: spellFromChampionData } = championData;
    if (Object.keys(items).length < 1) return null;
    return (
        <div className="tutorial-page">
            <div className="tutorial-page-block">
                <div
                    className="tutorial-page-block-intro"
                    style={{
                        backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_2.jpg)`,
                    }}
                >
                    <TutorialChampion champName={champion} summonerSpells={summonerSpells} />
                    <div className="tutorial-page-description">{description}</div>
                </div>
                <div className="tutorial-page-spells-block">
                    <div className="tutorial-page-header">Yetenekler</div>
                    <div className="tutorial-page-spells">
                        <TutorialSpells
                            spellFromChampionData={spellFromChampionData}
                            spellsFromTutorial={spellsFromTutorial}
                        />
                    </div>
                </div>
                <div className="tutorial-page-double-wrapper">
                    <div className="tutorial-page-items-block">
                        <div className="tutorial-page-header">Esyalar</div>
                        {Object.keys(itemPhases).map(key => {
                            const currentItems = itemsFromTutorial[key];
                            return (
                                <>
                                    <div className="tutorial-page-item-header" key={key}>
                                        {itemPhases[key]}
                                    </div>
                                    <div className="tutorial-page-item-content">
                                        {currentItems.map(itemId => {
                                            const currentItem = items[itemId];
                                            return (
                                                <TutorialItem itemId={itemId} key={itemId} name={currentItem.name} />
                                            );
                                        })}
                                    </div>
                                </>
                            );
                        })}
                    </div>
                    <div className="tutorial-page-runes-block">
                        <div className="tutorial-page-header">Runler</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Tutorial = withData(TutorialPage);
export { Tutorial };
