import React from 'react';
import { Icon } from '@iconify/react';

const Menu = () => {
    return (
        <div className="menuWrapper">
            <div>
                <ul>
                    <li>
                        <a>
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
    );
};

export default Menu;