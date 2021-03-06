import React from 'react';
import './itemList.css';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

import {useState, useEffect} from 'react';

const ItemList = (props) => {

    const [itemList, setItemList] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const {getData} = props;

        getData()
            .then(itemList => {
                setItemList(itemList);
            })
    }, [])

    const renderItems = (arr) => {
        return arr.map((item, i) => {
            const label = props.renderItem(item)
            const bookOrHouse = props.bookOrHouse;

            return (
                <li
                    key={i} 
                    className="list-group-item"
                    onClick={
                        bookOrHouse === false
                        ? 
                        () => props.onItemSelected(41 + i)
                        :
                        () => props.onItemSelected(1 + i)
                    }>
                    {label}
                </li>
            )
        }) 
    }

    if (error) {
        return <ErrorMessage/>
    }
    
    if (!itemList) {
        return <Spinner/>
    }

    const items = renderItems(itemList);

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

export default ItemList;