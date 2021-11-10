import React from 'react';
import {Link} from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <h3 className="header-title">
                <Link to='/'>
                Game of Thrones DB
                </Link>
            </h3>
            <ul className="header-list">
                <li>
                    <a>
                        <Link to='/characters/'>Characters</Link>
                    </a>
                </li>
                <li>
                    <a>
                        <Link to='/houses/'>Houses</Link>
                    </a>
                </li>
                <li>
                    <a>
                        <Link to='/books/'>Books</Link>   
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Header;