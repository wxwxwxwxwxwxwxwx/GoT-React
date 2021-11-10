import React from 'react';
import ItemList from '../itemList/itemList';
import ItemDetails from '../itemDetails/itemDetails';
import Field from '../itemDetails/field';
import ErrorMessage from '../errorMessage/errorMessage';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock/rowBlock';

import {useState} from 'react';

const CharacterPage = () => {
    const gotService = new GotService();

    const [selectedChar, setSelectedChar] = useState(null);
    const [error, setError] = useState(false);

    const onItemSelected = (id) => {
        setSelectedChar(id);
    }

    try {
        if (error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={onItemSelected}
                getData={gotService.getAllCharacters}
                renderItem={({name, gender}) => `${name} (${gender})`}/>
        )

        const itemDetails = (
            <ItemDetails
            itemId={selectedChar}
            getData={gotService.getCharacter} >
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )

        return (
           <RowBlock left={itemList} right={itemDetails} />
        )
    } catch (error) {
        setError(true)
    }
}

export default CharacterPage;