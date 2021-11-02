import React from 'react';
import { Icon } from '@iconify/react';

const Menu = () => {
    return (
        <div className="menuWrapper">
            <ul>
                <li>
                    <a>
                        <span className="icon"><Icon icon="carbon:dashboard" className="realIcon"/></span>
                        <span className="title">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a>
                        <span className="icon">Icon</span>
                        <span className="title">View bugs</span>
                    </a>
                </li>
                <li>
                    <a>
                        <span className="icon">Icon</span>
                        <span className="title">Create bug</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;