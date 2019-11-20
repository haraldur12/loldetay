import React, { FunctionComponent, useEffect, useState } from 'react';
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
}

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
    });
    useEffect(() => {
        getItems().then(res => {
            setItems(res.data[itemId]);
        });
    }, []);
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
        </div>
    );
};

export { ItemPage };
