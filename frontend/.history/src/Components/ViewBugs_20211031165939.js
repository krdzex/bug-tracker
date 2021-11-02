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

        </div>
    );
};

export default ViewBugs;