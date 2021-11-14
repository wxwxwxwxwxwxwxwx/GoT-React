import React from 'react';
import ItemList from '../itemList/itemList';
import ErrorMessage from '../errorMessage/errorMessage';
import GotService from '../../services/gotService';
import {withRouter} from 'react-router-dom';
import Field from '../itemDetails/field';
import RowBlock from '../rowBlock/rowBlock';
import ItemDetails from '../itemDetails/itemDetails';

import {useState} from 'react';

const BooksPage = (props) => {

    const gotService = GotService();

    const [selectedBook, setSelectedBook] = useState(null);
    const [error, setError] = useState(false);

    const onItemSelected = (id) => {
        setSelectedBook(id)
    }

    try {

        if (error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={onItemSelected}
                getData={gotService.getAllBooks}
                renderItem={({name}) => name}/>
        )

        const itemDetails = (
            <ItemDetails
            itemId={selectedBook}
            getData={gotService.getBook} >
                <Field field='name' label='Name'/>
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )

        return (
           <RowBlock left={itemList} right={itemDetails} />
        )
    } catch (error) {
        setError(true)
    }
}
export default withRouter(BooksPage);