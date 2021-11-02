import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeShow } from '../Actions';

const EditBug = () => {
    const bugInfo = useSelector(state => state.bugReducer)
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        name: bugInfo.name,
        details: bugInfo.details,
        steps: bugInfo.steps,
        priority: bugInfo.priority,
        assigned: bugInfo.assigned,
        version: bugInfo.version
    })

    const onChange = name => event => {
        setValues({ [name]: event.target.value })
    }

    const on
    return (
        <div className="singleBugWrapper">
            <div className="bugCard">
                <div className="bugHeader">
                    Edit Bug
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td className="left">Name:</td>
                            <td className="right"><input type="text" value={values.name} onChange={onChange("name")} /></td>
                        </tr>
                        <tr>
                            <td className="left">Details:</td>
                            <td className="right"><input type="text" value={values.details} onChange={onChange("details")} /></td>
                        </tr>
                        <tr>
                            <td className="left">Steps:</td>
                            <td className="right"><input type="text" value={values.steps} onChange={onChange("steps")} /></td>
                        </tr>
                        <tr>
                            <td className="left">Priority:</td>
                            <td className="right">
                                <input list="bugPriority" onMouseDown={() => setValues({ priority: "" })} value={values.priority} onKeyDown={(event) => {
                                    event.preventDefault();
                                }} onChange={onChange("priority")} onBlur={() => console.log("AAA")} />
                                <datalist id="bugPriority">
                                    <option value="Low" />
                                    <option value="Medium" />
                                    <option value="High" />
                                </datalist>
                            </td>
                        </tr>
                        <tr>
                            <td className="left">Creator:</td>
                            <td className="right"><input type="text" value={bugInfo.creator} disabled /></td>
                        </tr>
                        <tr>
                            <td className="left">App version:</td>
                            <td className="right"><input type="text" value={values.version} onChange={onChange("version")} /></td>
                        </tr>
                        <tr>
                            <td className="left">Assigned:</td>
                            <td className="right"><input type="text" value={bugInfo.assigned} onChange={onChange("assigned")} /></td>
                        </tr>
                        <tr>
                            <td className="left">Time created:</td>
                            <td className="right"><input type="text" value={bugInfo.time} disabled /></td>
                        </tr>
                    </tbody>
                </table>
                <div className="buttons edit">
                    <button id="complete">
                        Edit
                    </button>
                </div>
                <div className="exit" onClick={() => dispatch(changeShow("allBugs"))}></div>
            </div>
        </div>
    );
};

export default EditBug;