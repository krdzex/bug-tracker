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
            {bugs.map((bug,id) =>{
                <div className="bug">
                    <span>Bug {id+1}</span>
                </div>
            })}
        </div>
    );
};

export default ViewBugs;