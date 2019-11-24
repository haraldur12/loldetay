import React, { FunctionComponent, useState, useEffect } from 'react';
import { getItems } from './utilities/getItems';
import { Item } from './Item';
import { tags } from './constants';
import './Items.css';

interface Item {
    [index: string]: {
        name: string;
        description: string;
        tags: string[];
    };
}

const Items: FunctionComponent = () => {
    const [items, setItems] = useState<Item>({});
    const [activeSection, setActiveSection] = useState<string>('Boots');
    const [isMenuActive, setMenuStatus] = useState<boolean>(false);
    useEffect(() => {
        getItems().then(res => {
            setItems(res.data);
        });
    }, []);

    return (
        <div className="items-index" id="items-wrapper">
            <div>
                <div className={`items-menu ${isMenuActive ? 'active' : ''}`}>
                    {Object.keys(tags).map(tag => {
                        return (
                            <div
                                style={{ display: isMenuActive ? 'block' : '' }}
                                className="items-menu-label"
                                key={tag}
                                onClick={(): void => {
                                    setActiveSection(tag);
                                    setMenuStatus(!isMenuActive);
                                }}
                            >
                                {tags[tag]}
                            </div>
                        );
                    })}
                    <span onClick={(): void => setMenuStatus(!isMenuActive)} className="toggle">
                        <i className="fa fa-toggle-up"></i>
                        <span className="category-header">Kategoriler</span>
                    </span>
                </div>
            </div>
            <main className="items-item-show-room" id="show-room">
                {Object.keys(items).map((itemId: string) => {
                    if (items[itemId].tags.includes(activeSection)) {
                        return (
                            <div className="items-item-show-room-single">
                                <Item itemId={itemId} key={itemId} data={items[itemId]} />
                            </div>
                        );
                    }
                })}
            </main>
        </div>
    );
};

export { Items };
