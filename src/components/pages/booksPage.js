import React from 'react';
import ItemList from '../itemList/itemList';
import ErrorMessage from '../errorMessage/errorMessage';
import GotService from '../../services/gotService';
import {withRouter} from 'react-router-dom';

import {useState, useEffect} from 'react';

const BooksPage = (props) => {

    const gotService = new GotService();

    const [selectedBook, setSelectedBook] = useState(null);
    const [error, setError] = useState(false);

    const onItemSelected = (id) => {
        setSelectedBook(id)
    }

    try {

        if (error) {
            return <ErrorMessage/>
        }

        return (
            <ItemList 
            onItemSelected={(itemId) => {
                props.history.push(itemId)
            }}
            getData={gotService.getAllBooks}
            renderItem={({name}) => name}/>
        )
    } catch (error) {
        setError(true)
    }
}
export default withRouter(BooksPage);