import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBug, changeShow } from '../Actions';
import EditBug from './EditBug';
import SingleBug from './SingleBug';

const ViewBugs = () => {
    const [bugs, setBugs] = useState([
        {
            name: "Krsto", details: "Da", steps: "da", assigned: "da", creator: "admin", time: "14:15", priority: "high", version: "v2"
        },
        {
            name: "Krsto", details: "Da", steps: "da", assigned: "da", creator: "admin", time: "14:15", priority: "high", version: "v2"
        },
        {
            name: "Krsto", details: "Da", steps: "da", assigned: "da", creator: "admin", time: "14:15", priority: "high", version: "v2"
        },
        {
            name: "Krsto", details: "Da", steps: "da", assigned: "da", creator: "admin", time: "14:15", priority: "high", version: "v2"
        },
        {
            name: "Krsto", details: "Da", steps: "da", assigned: "da", creator: "admin", time: "14:15", priority: "high", version: "v2"
        },
        {
            name: "Krsto", details: "Da", steps: "da", assigned: "da", creator: "admin", time: "14:15", priority: "high", version: "v2"
        },
        {
            name: "Krsto", details: "Da", steps: "da", assigned: "da", creator: "admin", time: "14:15", priority: "high", version: "v2"
        },
    ])

    const show = useSelector(state => state.bugsShowReducer)

    const whatToShow = (show, bug) => {
        dispatch(changeShow(show))
        dispatch(addBug(bug))
    }
    const dispatch = useDispatch()
    return (
        <div>
            {show === "allBugs" ? <div className="bugsWrapper">
                <div className="mapWrapper">
                    {bugs.map((bug, id) => {
                        return <div className={"bug " + bug.priority} onClick={() => whatToShow("singleBug", bug)}>
                            <span>Bug {id + 1}: {bug.name}</span>
                            <span>{bug.priority}</span>
                            <span>{bug.version}</span>
                        </div>
                    })}
                </div>


            </div> :
                show === "singleBug" ?
                    <SingleBug />
                    :
                    <EditBug /> }
        </div>
    );
};

export default ViewBugs;