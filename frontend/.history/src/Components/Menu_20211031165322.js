import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Menu = () => {
const dispatch = useDispatch()
    const [active, setActive] = useState("dashboard")

    const onClick = (active) => {
        dispatch(active)
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
                <li className={active === "createBugs" ? "active" : ""}>
                    <Link to="createBugs" onClick={() => onClick("createBugs")}>
                        <span className="icon"><Icon icon="carbon:dashboard" className="realIcon" /></span>
                        <span className="title">Create Bug</span>
                    </Link>
                </li>
            </ul>
        </div >
    );
};

export default Menu;