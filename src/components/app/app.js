import {useState, useEffect} from 'react';

import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ErrorMessage from '../errorMessage/errorMessage';
import {CharacterPage, BooksPage, HousesPage, BooksItem} from '../pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './app.css';

const App = () => {

    const [showRandomChar, setShowRandomChar] = useState(true);
    const [error, setError] = useState(false);
    // const [selectedHouse, setSelectedHouse] = useState(20);

    useEffect(() => {
        setError(true);
    }, [error]);
    
    function toggleRandomChar() {
        setShowRandomChar(showRandomChar => !showRandomChar)
    }
    
    const char = showRandomChar ? <RandomChar/> : null;

    if (error) {
        <ErrorMessage/>
    }

    return (
        <Router> 
            <div className='app'>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                        {char}
                        <button 
                            className="toggle-btn"
                            onClick={toggleRandomChar}>Toggle random character</button>
                        </Col>
                    </Row>
                    <Route path='/' component={() => <h1>Choose characters/houses/book, please</h1>} exact/>
                    <Route path='/characters' component={CharacterPage} />
                    <Route path='/books' component={BooksPage} exact/>
                    <Route path='/books/:id' render={({match}) => {
                        const {id} = match.params;
                        return <BooksItem bookId={id}/>
                    }}/>
                    <Route path='/houses' component={HousesPage} />
                </Container>
            </div>
        </Router>
    )
};

export default App;