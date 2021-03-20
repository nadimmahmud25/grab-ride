import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/Bg.png';

const Header = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
          <h2>Find Transport</h2>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link className="btn-Destination" to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
};

export default Header;