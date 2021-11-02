import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const Menu = () => {

    const [active, setActive] = useState("dashboard")

    const onClick = (active) => {
        setActive(active)
    }
    return (
        <div className="menuWrapper">
            <div className="midSector">
                <div>
                    <ul>
                        <li>
                            <a className="dashBo">
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
            </div>

        </div>
    );
};

export default Menu;