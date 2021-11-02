import React from 'react';

const DashBoard = () => {
    return (
        <div className="dashBoardWrapper">
                <div className="high">
                    <span className="above">
                        Total: High
                    </span>
                    <span className="counter">
                        5
                    </span>
                </div>
                <div className="medium">
                    <span className="above">
                        Total: Medium
                    </span>
                    <span className="counter">
                        5
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
        </div>
    );
};

export default DashBoard;