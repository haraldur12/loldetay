import React, { FunctionComponent } from 'react';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

import './Item.css';
type ItemProps = {
    itemId: string;
    data: { name: string };
};
const Item: FunctionComponent<ItemProps> = ({ itemId, data }) => {
    const { name } = data;
    return (
        <Link to={`/item/${itemId}`}>
            <img
                data-tip={name}
                className="item-image-single"
                src={`https://ddragon.leagueoflegends.com/cdn/9.22.1/img/item/${itemId}.png`}
            />
            <ReactTooltip />
        </Link>
    );
};

export { Item };
