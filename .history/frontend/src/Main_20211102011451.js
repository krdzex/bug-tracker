import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Components/Menu';
import MainRouter from './MainRouter';

const Main = () => {
    const popUp = useSelector(state => state.popUpReducer)
    return (
        <BrowserRouter>
            <Menu />
            <div className="mainWrapper">
                <div className={popUp.show ? "popUp show" : "popUp"}></div>
                <MainRouter />
            </div>
        </BrowserRouter>
    );
};

export default Main;