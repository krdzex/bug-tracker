import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Components/Menu';
import MainRouter from './MainRouter';

class SubRouter extends Component {
    render() {
        <BrowserRouter>
            <Menu />
            <div className="mainWrapper">
                <MainRouter />
            </div>
        </BrowserRouter>
    );
};

export default Main;