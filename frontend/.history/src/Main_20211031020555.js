import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter';

const Main = () => {
    return (
        <BrowserRouter>
            <div className="mainWrapper">
                <MainRouter>
            </div>
        </BrowserRouter>
    );
};

export default Main;