import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getItems } from './utilities/getItems';
import ReactTooltip from 'react-tooltip';

import './ItemPage.css';

interface Item {
    name: string;
    plaintext: string;
    gold: {
        base: string;
        purchasable: boolean;
        sell: string;
    };
    into: string[];
}
type Builds = {
    [index: string]: {
        name: string;
        plaintext: string;
    };
};
const ItemPage: FunctionComponent<{ match: any }> = ({ match }) => {
    const itemId = match.params.itemId;
    const [item, setItems] = useState<Item>({
        name: '',
        plaintext: '',
        gold: {
            base: '',
            purchasable: true,
            sell: '',
        },
        into: [],
    });
    const [builds, setBuilds] = useState<Builds>({});

    useEffect(() => {
        getItems().then(res => {
            const currentItem = res.data[itemId];
            const { into = [] } = currentItem;
            setItems(res.data[itemId]);
            const intoInfos: { [index: string]: { name: string; plaintext: string } } = {};
            into.forEach((itemId: string): void => {
                const intoItem = res.data[itemId];
                const { name = '', plaintext = '' } = intoItem;
                intoInfos[itemId] = { name, plaintext };
            });
            setBuilds(intoInfos);
        });
    }, [itemId]);
    return (
        <div className="item-page">
            <div className="item-page-info">
                <img
                    data-tip={item.name}
                    className="item-page-info-image"
                    src={`http://ddragon.leagueoflegends.com/cdn/9.22.1/img/item/${itemId}.png`}
                />
                <div>
                    <div className="item-page-info-header">{item.name}</div>
                    <div className="item-page-info-text">{item.plaintext}</div>
                </div>
                <ReactTooltip />
            </div>
            <div className="item-page-sell">
                <div>
                    <div className="item-page-sell-header">Fiyat Bilgileri</div>
                    <div className="item-page-info-text">Alim: {item.gold.base}</div>
                    <div className="item-page-info-text">Satim: {item.gold.sell}</div>
                </div>
                <ReactTooltip />
            </div>
            {item.into && (
                <div className="item-builds-into">
                    <span className="item-builds-into-header">Kombinasyonlar</span>
                    {item.into.map(itemId => {
                        if (builds[itemId]) {
                            return (
                                <Link to={`/item/${itemId}`} key={itemId}>
                                    <div className="item-page-info">
                                        <img
                                            className="item-page-info-image"
                                            src={`http://ddragon.leagueoflegends.com/cdn/9.22.1/img/item/${itemId}.png`}
                                        />
                                        <div>
                                            <div className="item-page-info-header">{builds[itemId].name}</div>
                                            <div className="item-page-info-text">{builds[itemId].plaintext}</div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        }
                    })}
                </div>
            )}
        </div>
    );
};

export { ItemPage };
