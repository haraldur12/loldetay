import React, { FunctionComponent } from 'react';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

import './TutorialItem.css';
type TutorialItemProps = {
    itemId: number;
    name: string;
};
const TutorialItem: FunctionComponent<TutorialItemProps> = ({ itemId, name }) => {
    return (
        <Link to={`/item/${itemId}`} className="tutorial-item-image-block">
            <img
                data-tip={name}
                className="tutorial-item-image-block-single"
                src={`http://ddragon.leagueoflegends.com/cdn/9.22.1/img/item/${itemId}.png`}
            />
            <ReactTooltip />
            <span className="tutorial-item-text ">{name}</span>
        </Link>
    );
};

export { TutorialItem };
