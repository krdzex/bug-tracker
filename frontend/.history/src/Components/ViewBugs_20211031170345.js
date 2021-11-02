import React, { useState } from 'react';

const ViewBugs = () => {
    const [bugs, setBugs] = useState([
        {
            name: "Krsto", priority: "high", version: "v2"
        },
        {
            name: "Krsto", priority: "high", version: "v2"
        },
        {
            name: "Krsto", priority: "high", version: "v2"
        },
        {
            name: "Krsto", priority: "high", version: "v2"
        },
        {
            name: "Krsto", priority: "high", version: "v2"
        }, {
            name: "Krsto", priority: "high", version: "v2"
        }, {
            name: "Krsto", priority: "high", version: "v2"
        }
    ])
    return (
        <div className="bugsWrapper">
            <div className="mapWrapper">
                {bugs.map((bug, id) => {
                    return <div className="bug">
                        <span>Bug {id + 1}: {bug.name}</span>
                        <span>{bug.priority}</span>
                        <span>{bug.version}</span>
                    </div>
                })}
            </div>
        </div>
    );
};

export default ViewBugs;