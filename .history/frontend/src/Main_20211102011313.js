import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Components/Menu';
import MainRouter from './MainRouter';

const Main = () => {
    return (
        <BrowserRouter>
            <Menu />
            <div className="mainWrapper">
                { <div className="popUp"></div>}
                <MainRouter />
            </div>
        </BrowserRouter>
    );
};

export default Main;