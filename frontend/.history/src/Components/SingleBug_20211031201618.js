import React from 'react';
import { useSelector } from 'react-redux';

const SingleBug = () => {
    const bugInfo = useSelector(state => state.bugReducer)
    return (
        <div className="bugCard">
            <div className="bugHeader">
                <div>
                    Delete
                </div>
                {bubugInfog}
            </div>
        </div>
    );
};

export default SingleBug;