import {useState, useEffect} from 'react';

import React from 'react';
import './itemDetails.css';

const ItemDetails = (props) => {

    const [item, setItem] = useState(null);
    const [itemId, getData] = useState(props);
    const [prevProps] = useState(props);
    const [data, setData] = useState(props);

    useEffect(() => {
        updateItem();
    }, []);

    useEffect(() => {
        if (itemId !== prevProps.itemId) {
            updateItem();
        }
    });

    function updateItem() {
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((data) => {
                setItem({data});
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
                    React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, {item})
                    })
                }
            </ul>
        </div>
    );
}

export default ItemDetails;