import React from 'react';
import gotService from '../../services/gotService';
import ItemDetails from '../itemDetails/itemDetails';
import Field from '../itemDetails/field';

const BooksItem = () => {
    gotService = new gotService();

    return (
        <ItemDetails
        itemId={this.props.bookId}
        getData={this.gotService.getBook} >
            <Field field='numberOfPages' label='Number of pages'/>
            <Field field='publisher' label='Publisher'/>
            <Field field='released' label='Released'/>
        </ItemDetails>
    )
}

export default BooksItem;