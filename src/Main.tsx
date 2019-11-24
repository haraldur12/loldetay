import React, { FunctionComponent } from 'react';
import './Main.css';

const Main: FunctionComponent = () => {
    return (
        <div
            className="main-background"
            style={{
                backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Urgot_1.jpg)`,
            }}
        >
            <div className="main">
                <div>LoL Detay</div>
                <div>League of Legends'in Buyulu Dunyasini Kesfedin.</div>
            </div>
        </div>
    );
};

export { Main };
