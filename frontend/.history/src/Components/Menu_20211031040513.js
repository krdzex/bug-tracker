import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Menu = () => {

    const [active, setActive] = useState("dashboard")

    const onClick = (active) => {
        setActive(active)
    }
    return (
        <div className="menuWrapper">
            <ul>
                <li className={active === "dashboard" ? "active" : ""}>
                    <Link to="/">
                        <span className="icon"><Icon icon="carbon:dashboard" className="realIcon" /></span>
                        <span className="title">Dashboard</span>
                    </Link>
                </li>
                <li className={active === "dashboard" ? "active" : ""}>
                    <Link to="/viewBugs" onClick={() =>onClick("viewBugs")}>
                        <span className="icon"><Icon icon="carbon:dashboard" className="realIcon" /></span>
                        <span className="title">View Bugs</span>
                    </Link>
                </li>
                <li>
                    <Link to="createBugs" onClick={() =>onClick("createBugs")}>
                        <span className="icon"><Icon icon="carbon:dashboard" className="realIcon" /></span>
                    <span className="title">Create Bug</span>
                </Link>
            </li>
        </ul>
        </div >
    );
};

export default Menu;