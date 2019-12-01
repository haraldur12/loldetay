import React, { FunctionComponent } from 'react';
import Popup from 'reactjs-popup';
import { TutorialSpell } from './TutorialSpell';
import './TutorialSpells.css';

interface TutorialSpellsProps {
    spellFromChampionData: Spell[];
    spellsFromTutorial: {
        [key: string]: number[];
    };
}

const TutorialSpells: FunctionComponent<TutorialSpellsProps> = props => {
    const { spellFromChampionData, spellsFromTutorial } = props;
    const skillCount = Array(18).fill(null);
    return (
        <div className="tutorial-page-spells">
            {['q', 'w', 'e', 'r'].map((spell, index: number) => {
                const currentSpellSet = spellFromChampionData[index] || {};
                const { image = { group: '', full: '' }, name, description, id } = currentSpellSet;
                return (
                    <div className="tutorial-page-spells-row" key={spell}>
                        <Popup
                            trigger={
                                <img
                                    className="tutorial-page-spell-item-image"
                                    src={`http://ddragon.leagueoflegends.com/cdn/9.22.1/img/${image.group}/${image.full}`}
                                />
                            }
                            on="hover"
                            position="right center"
                            closeOnDocumentClick
                        >
                            <TutorialSpell id={id} image={image} name={name} description={description} />
                        </Popup>

                        {skillCount.map((_, index) => (
                            <div
                                key={index}
                                className={
                                    spellsFromTutorial[spell].includes(index)
                                        ? 'tutorial-page-spell-box-filled'
                                        : 'tutorial-page-spell-box'
                                }
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export { TutorialSpells };
