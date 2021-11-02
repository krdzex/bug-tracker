import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { newActive } from '../Actions';
import { listBugs } from '../ApiService/bugApi';

const DashBoard = () => {
    const onClick = (active) => {
        dispatch(newActive(active))
    }

    const [bugCounter, setBugCounter] = useState({ low: 0, medium: 0, high: 0 })

    useEffect(() => {
        listBugs().then(response => {
            response.forEach(bug => {
                setBugCounter({...bugCounter})
            });
        }).catch(reason => console.log(reason))
    }, [])
    const dispatch = useDispatch()
    return (
        <div className="dashBoardWrapper">
            <div className="boxWrapper">
                <Link to="/viewBugs" onClick={() => onClick("viewBugs")}><div className="box high">
                    <span className="above">
                        Total: High
                    </span>
                    <span className="counter">
                        {bugCounter.high}
                    </span>
                </div>
                </Link>
                <Link to="/viewBugs" onClick={() => onClick("viewBugs")}><div className="box medium">
                    <span className="above">
                        Total: Medium
                    </span>
                    <span className="counter">
                    {bugCounter.medium}
                    </span>
                </div>
                </Link>
                <Link to="/viewBugs" onClick={() => onClick("viewBugs")}><div className="box low">
                    <span className="above">
                        Total: Low
                    </span>
                    <span className="counter">
                    {bugCounter.low}
                    </span>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default DashBoard;