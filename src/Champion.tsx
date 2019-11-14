import React, { FunctionComponent } from 'react';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

const Champion: FunctionComponent<{ champName: string }> = ({ champName }) => {
    return (
        <Link to={`/champion/${champName}`}>
            <img
                data-tip={champName}
                src={`http://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/${champName}.png`}
            />
            <ReactTooltip />
        </Link>
    );
};

export { Champion };
