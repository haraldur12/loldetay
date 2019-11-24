import React, { FunctionComponent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../../services/Firebase';
import './Navbar.css';

const NavbarSection: FunctionComponent<{ firebase: any; currentUser: any }> = ({ firebase, currentUser }) => {
    const [isActive, setActive] = useState(false);
    const { displayName } = currentUser;
    return (
        <nav className={`navbar ${isActive ? 'active' : ''}`}>
            <span onClick={(): void => setActive(!isActive)} className="toggle">
                <i className="fa fa-reorder"></i>
            </span>
            <Link to="/">
                <span className="brand">LoL Detay</span>
            </Link>
            <div className="left">
                <Link to="/champions" className="link" onClick={(): void => setActive(false)}>
                    Sampiyonlar
                </Link>
                <Link to="/items" className="link" onClick={(): void => setActive(false)}>
                    Esyalar
                </Link>
                <Link to="/tutorials" className="link" onClick={(): void => setActive(false)}>
                    Rehberler
                </Link>
            </div>
            <div className="right">
                <Link to={displayName ? '/profile' : '/login'} className="link" onClick={(): void => setActive(false)}>
                    {displayName ? displayName : 'Giris Yap'}
                </Link>
            </div>
        </nav>
    );
};
const Navbar = withFirebase(NavbarSection);
export { Navbar };
