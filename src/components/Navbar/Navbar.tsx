import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar: FunctionComponent = () => {
    const [isActive, setActive] = useState(false);
    return (
        <nav className={`navbar ${isActive ? 'active' : ''}`}>
            <span onClick={(): void => setActive(!isActive)} className="toggle">
                <i className="fa fa-reorder"></i>
            </span>
            <span className="brand">LoL Detay</span>
            <div className="left">
                <Link to="/champions" className="link">
                    Sampiyonlar
                </Link>
                <Link to="/items" className="link">
                    Esyalar
                </Link>
            </div>
        </nav>
    );
};

export { Navbar };
