import React from 'react';
import ItemList from '../itemList/itemList';
import ItemDetails from '../itemDetails/itemDetails';
import Field from '../itemDetails/field';
import ErrorMessage from '../errorMessage/errorMessage';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock/rowBlock';

import {useState} from 'react';

const HousesPage = () => {
    const gotService = new GotService();

    const [selectedHouse, setSelectedHouse] = useState(null);
    const [error, setError] = useState(false);

    const onItemSelected = (id) => {
        setSelectedHouse(id);
    }

    try {
        if (error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={onItemSelected}
                getData={gotService.getAllHouses}
                renderItem={({name}) => name}/>
        )

        const itemDetails = (
            <ItemDetails
            itemId={selectedHouse}
            getData={gotService.getHouse} >
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='coatOfArms' label='Coat of Arms'/>
                <Field field='founded' label='Founded'/>
            </ItemDetails>
        )

        return (
           <RowBlock left={itemList} right={itemDetails} />
        )
    } catch (error) {
        setError(true)
    }
}

export default HousesPage;