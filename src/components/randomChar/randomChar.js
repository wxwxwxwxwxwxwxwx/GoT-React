import React from 'react';
import GotService from '../../services/gotService';
import './randomChar.css';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

import {useState, useEffect} from 'react';

const RandomChar = () => {

    const {loading, error, getCharacter} = GotService();

    const [char, setChar] = useState({});

    useEffect(() => {
        updateChar();
    }, [])

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        const id = Math.floor(Math.random()*3000 + 5);
        getCharacter(id)
            .then(onCharLoaded)
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <View char={char}/> : null;

    return (
        <div className="random-block rounded">
            {errorMessage}
            {spinner}
            {content}
        </div>
    );
}

const View = ({char}) => {
    let { name, gender, born, died, culture } = char

    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span className="text">{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span className="text">{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span className="text">{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span className="text">{culture}</span>
                </li>
            </ul>
        </>
    )
}

export default RandomChar;
