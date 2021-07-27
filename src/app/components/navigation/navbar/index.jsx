import React from 'react';
import './style.scss';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="world">
                Where in the world?
            </div>
            <div className="mode">
            <i className="far fa-moon"></i>
                Dark Mode
            </div>
        </div>
    )
}