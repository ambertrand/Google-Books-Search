import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <Link to="/" className="navbar-brand">Google Books</Link>
            <Link to="/" className="nav-link">Search</Link>
            <Link to="/saved" className="nav-link">Saved</Link>
        </nav>
    )
}

export default Navbar;