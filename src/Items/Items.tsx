import React, { FunctionComponent, useState, useEffect } from 'react';
import { getItems } from './utilities/getItems';
import { Item } from './Item';

interface Item {
    [index: string]: {
        name: string;
        description: string;
    };
}

const Items: FunctionComponent = () => {
    const [items, setChampions] = useState<Item>({});
    useEffect(() => {
        getItems().then(res => {
            setChampions(res.data);
        });
    });

    return (
        <div className="champions-index">
            {Object.keys(items).map((itemId: string) => {
                return <Item itemId={itemId} key={itemId} data={items[itemId]} />;
            })}
        </div>
    );
};

export { Items };
