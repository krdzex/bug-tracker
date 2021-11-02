import React from 'react';

const Menu = () => {
    return (
        <div className="menuWrapper">
            <ul>
                <li>
                    <a>
                        <span className="icon"><Icon icon="carbon:dashboard" /></span>
                        <span className="title">New password</span>
                    </a>
                </li>
                <li>
                    <a>
                        <span className="icon">Icon</span>
                        <span className="title">New password</span>
                    </a>
                </li>
                <li>
                    <a>
                        <span className="icon">Icon</span>
                        <span className="title">New password</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;