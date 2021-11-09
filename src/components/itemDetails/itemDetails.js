import {useState, useEffect} from 'react';

import React from 'react';
import './itemDetails.css';

const ItemDetails = (props) => {

    const [item, setItem] = useState(null);
    const [prevProps] = useState(props);


    useEffect(() => {
        updateItem();
    }, []);

    useEffect(() => {
        
        const {itemId} = props;

        if (itemId !== prevProps.itemId) {
            updateItem();
        }
    });

    const updateItem = () => {

        const {getData, itemId} = props;

        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((data) => {
                setItem(data);
            })

    }


    if (!item) {
        return <span className='select-error'>Please select item in the list</span>
    }

    const {name} = item;

    return (
        <div className="char-details rounded">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                {
                    React.Children.map(props.children, (child) => {
                        return React.cloneElement(child, {item})
                    })
                }
            </ul>
        </div>
    );
}

export default ItemDetails;