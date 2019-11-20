import React, { FunctionComponent, useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
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
                {Object.keys(tags).map(tag => {
                    return (
                        <div className="items-menu-label" key={tag} onClick={(): void => setActiveSection(tag)}>
                            {tags[tag]}
                        </div>
                    );
                })}
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
