import React from 'react';
import gotService from '../../services/gotService';
import ItemDetails from '../itemDetails/itemDetails';
import Field from '../itemDetails/field';

const BooksItem = (props) => {
    gotService = new gotService();

    return (
        <ItemDetails
        itemId={props.bookId}
        getData={gotService.getBook} >
            <Field field='numberOfPages' label='Number of pages'/>
            <Field field='publisher' label='Publisher'/>
            <Field field='released' label='Released'/>
        </ItemDetails>
    )
}

export default BooksItem;