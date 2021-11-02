import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { newActive } from '../Actions';
import authHalper from '../ApiService/authHalper';

const Menu = () => {
    const dispatch = useDispatch()
    const active = useSelector(state => state.menuReducer)
    const onClick = (active) => {
        dispatch(newActive(active))
    }

    const onLogutClick = () =>{
        authHalper.
    }
    return (
        <div className="menuWrapper">
            <ul>
                <li className={active === "dashboard" ? "active" : ""}>
                    <Link to="/" onClick={() => onClick("dashboard")}>
                        <span className="icon"><Icon icon="carbon:dashboard" className="realIcon" /></span>
                        <span className="title">Dashboard</span>
                    </Link>
                </li>
                <li className={active === "viewBugs" ? "active" : ""}>
                    <Link to="/viewBugs" onClick={() => onClick("viewBugs")}>
                        <span className="icon"><Icon icon="carbon:dashboard" className="realIcon" /></span>
                        <span className="title">View Bugs</span>
                    </Link>
                </li>
                {authHalper.isAdmin() && (
                    <li className={active === "createBugs" ? "active" : ""}>
                        <Link to="createBugs" onClick={() => onClick("createBugs")}>
                            <span className="icon"><Icon icon="carbon:dashboard" className="realIcon" /></span>
                            <span className="title">Create Bug</span>
                        </Link>
                    </li>
                )}
            </ul>
            <div onClick={() =>onLogutClick()}>
                <span className="icon"><Icon icon="tabler:logout" className="realIcon" /></span>
                <span className="title">Logout</span>
            </div>
        </div >
    );
};

export default Menu;