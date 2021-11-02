import React from 'react';

const Menu = () => {
    return (
        <div className="menuWrapper">
            <ul>
                <li>
                    <a>
                    <span className="icon"><Icon icon="ri:lock-password-line" className="realIcon" /></span>
                            <span className="title">New password</span>

                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;