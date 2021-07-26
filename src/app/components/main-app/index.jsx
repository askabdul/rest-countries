import React from 'react';
import { Navbar } from '../navigation/navbar';
import { Countries } from './countries';
// import './style.scss';

export const App = () => {
    return (
        <div className='main-app'>
            <Navbar />
            <Countries />
        </div>
    )
}