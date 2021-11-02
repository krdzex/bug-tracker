import React, { useState } from 'react';

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

    const[show,setShow] = useState("allBugs")

    const whatToShow = () => {

    }
    return (
        <div className="bugsWrapper">
            {show === "allBugs" ?<div className="mapWrapper">
                {bugs.map((bug, id) => {
                    return <div className={"bug " + bug.priority} onClic={() => whatToShow()}>
                        <span>Bug {id + 1}: {bug.name}</span>
                        <span>{bug.priority}</span>
                        <span>{bug.version}</span>
                    </div>
                })}
            </div>}
        </div>
    );
};

export default ViewBugs;