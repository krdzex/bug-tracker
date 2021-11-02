import React from 'react';

const DashBoard = () => {
    return (
        <div className="dashBoardWrapper">
            <div className="high">
                <span>
                    Total: High
                </span>
            </div>
            <div className="medium">
                <span>
                    Total: Medium
                </span>
            </div>
            <div className="low">
                <span className="above">
                    Total: Low
                </span>
                <span className="counter">
                    5
                </span>
            </div>
        </div>
    );
};

export default DashBoard;