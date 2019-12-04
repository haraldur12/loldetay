import React, { FunctionComponent } from 'react';
import './TutorialSpell.css';

const TutorialSpell: FunctionComponent<Spell> = (props: Spell) => {
    const { description, image, name } = props;
    return (
        <div className="tutorial-spell">
            <div className="tutorial-spell-item-header">
                <span>
                    <img
                        className="tutorial-spell-item-image"
                        src={`https://ddragon.leagueoflegends.com/cdn/9.22.1/img/${image.group}/${image.full}`}
                    />
                </span>
                <span className="tutorial-spell-item-name">{name}</span>
            </div>
            {description}
        </div>
    );
};

export { TutorialSpell };
