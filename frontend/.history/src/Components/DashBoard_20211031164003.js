import React from 'react';

const DashBoard = () => {
    return (
        <div className="dashBoardWrapper">
            <div className="boxWrapper">
                <Link to="<div className="box high">
                    <span className="above">
                        Total: High
                    </span>
                    <span className="counter">
                        5
                    </span>
                </div>
                <div className="box medium">
                    <span className="above">
                        Total: Medium
                    </span>
                    <span className="counter">
                        5
                    </span>
                </div>
                <div className="box low">
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