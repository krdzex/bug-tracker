import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBug } from '../Actions';
import EditBug from './EditBug';
import SingleBug from './SingleBug';

const ViewBugs = () => {
    const [bugs, setBugs] = useState([
        {
            name: "Krsto", details: "Da", setps: "da", assigned: "da", creator: "admin", time: "14:15", priority: "high", version: "v2"
        },
        {
            name: "Krsto", details: "Da", setps: "da", assigned: "da", creator: "admin", time: "14:15", priority: "high", version: "v2"
        },
        {
            name: "Krsto", details: "Da", setps: "da", assigned: "da", creator: "admin", time: "14:15", priority: "high", version: "v2"
        },
        {
            name: "Krsto", details: "Da", setps: "da", assigned: "da", creator: "admin", time: "14:15", priority: "high", version: "v2"
        },
        {
            name: "Krsto", details: "Da", setps: "da", assigned: "da", creator: "admin", time: "14:15", priority: "high", version: "v2"
        },
        {
            name: "Krsto", details: "Da", setps: "da", assigned: "da", creator: "admin", time: "14:15", priority: "high", version: "v2"
        },
        {
            name: "Krsto", details: "Da", setps: "da", assigned: "da", creator: "admin", time: "14:15", priority: "high", version: "v2"
        },
    ])

    const [show, setShow] = useState("allBugs")

    const whatToShow = (show, bug) => {
        setShow(show)
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
                :
                show === "singleBug" ?
                    <SingleBug />
                    :
                    <EditBug />
            }
        </div>
        
    );
};

export default ViewBugs;