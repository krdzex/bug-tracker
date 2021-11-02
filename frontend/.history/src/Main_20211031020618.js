import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter';

const Main = () => {
    return (
        <BrowserRouter>
        <Menu />
            <div className="mainWrapper">
                <MainRouter />
            </div>
        </BrowserRouter>
    );
};

export default Main;