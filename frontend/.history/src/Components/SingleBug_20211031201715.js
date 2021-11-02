import React from 'react';
import { useSelector } from 'react-redux';

const SingleBug = () => {
    const bugInfo = useSelector(state => state.bugReducer)
    return (
        <div className="bugCard">
            <div className="bugHeader">

                {bugInfo.name}
                <div>
                    Close
                </div>
            </div>
        </div>
    );
};

export default SingleBug;