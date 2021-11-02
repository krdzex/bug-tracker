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
                    <Link to="/"
                        <span className="icon"><Icon icon="carbon:dashboard" className="realIcon" /></span>
                        <span className="title">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a>
                        <span className="icon"><Icon icon="carbon:dashboard" className="realIcon" /></span>
                        <span className="title">View Bugs</span>
                    </a>
                </li>
                <li>
                    <a>
                        <span className="icon"><Icon icon="carbon:dashboard" className="realIcon" /></span>
                        <span className="title">Create Bug</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;