import React, { FunctionComponent, useEffect, useState } from 'react';
import { getItems } from './utilities/getItems';

interface Item {
    name: string;
    description: string;
}

const ItemPage: FunctionComponent<{ match: any }> = ({ match }) => {
    const itemId = match.params.itemId;
    const [item, setItems] = useState<Item>({
        name: '',
        description: '',
    });
    useEffect(() => {
        getItems().then(res => {
            setItems(res.data[itemId]);
        });
    });
    return (
        <div>
            {item.name} {item.description}
        </div>
    );
};

export { ItemPage };
