import React from 'react';
import { useSelector } from 'react-redux';

const SingleBug = () => {
    const bugInfo = useSelector(state => state.bugReducer)
    return (
        <div className="singleBugWrapper">
<div>
    
</div>
            <div className="bugHeader">
                {bugInfo.name}
            </div>
        </div>
    );
};

export default SingleBug;