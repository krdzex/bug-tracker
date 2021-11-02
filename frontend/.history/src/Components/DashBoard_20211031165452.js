import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const DashBoard = () => {
    const onClick = (active) => {
        dispatch(newActive(active))
    }

    const dispatch = useDispatch()
    return (
        <div className="dashBoardWrapper">
            <div className="boxWrapper">
                <Link to="/viewBugs"><div className="box high">
                    <span className="above">
                        Total: High
                    </span>
                    <span className="counter">
                        5
                    </span>
                </div>
                </Link>
                <Link to="/viewBugs"><div className="box medium">
                    <span className="above">
                        Total: Medium
                    </span>
                    <span className="counter">
                        5
                    </span>
                </div>
                </Link>
                <Link to="/viewBugs"><div className="box low">
                    <span className="above">
                        Total: Low
                    </span>
                    <span className="counter">
                        5
                    </span>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default DashBoard;