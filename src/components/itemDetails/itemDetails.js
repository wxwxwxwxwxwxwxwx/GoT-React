import {useState, useEffect} from 'react';

import React from 'react';
import './itemDetails.css';

const ItemDetails = (props) => {

    const [item, setItem] = useState(null);
    const [prevProps] = useState(props);
    const [id, setId] = useState(props.itemId);
    // const [data, setData] = useState(props.getData);


    useEffect(() => {
        updateItem();
    }, []);

    useEffect(() => {
        // if (itemId !== prevProps.itemId) {
        //     updateItem();
        // }
        if (id !== prevProps.id) {
            updateItem();
        }
    });

    const updateItem = () => {
        // if (!itemId) {
        //     return;
        // }
        if (!id) {
            return;
        }

        // const gotData = setData(id)
        //     .then((data) => {
        //         setItem({data})
        //     })

        // getData(itemId)
        //     .then((data) => {
        //         setItem({data});
        //     })
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