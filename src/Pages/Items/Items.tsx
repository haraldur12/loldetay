import React, { FunctionComponent, useState, useEffect } from 'react';
import { getItems } from './utilities/getItems';
import { Item } from './Item';
import { tags } from './constants';
import './Items.css';

const Items: FunctionComponent = () => {
    const [items, setItems] = useState<Items>({});
    const [searchItem, setSearchItem] = useState('');
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
                    <input
                        type="text"
                        className="items-search"
                        placeholder="Esya adi..."
                        value={searchItem}
                        onChange={e => setSearchItem(e.target.value)}
                    />
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
            <section className="items-show-room">
                <main className="items-item-show-room" id="show-room">
                    {Object.keys(items).map((itemId: string) => {
                        if (
                            searchItem.length > 0 &&
                            items[itemId].name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())
                        ) {
                            return (
                                <div className="items-item-show-room-single">
                                    <Item itemId={itemId} key={itemId} data={items[itemId]} />
                                </div>
                            );
                        }
                        if (items[itemId].tags.includes(activeSection) && searchItem.length === 0) {
                            return (
                                <div className="items-item-show-room-single">
                                    <Item itemId={itemId} key={itemId} data={items[itemId]} />
                                </div>
                            );
                        }
                    })}
                </main>
            </section>
        </div>
    );
};

export { Items };
