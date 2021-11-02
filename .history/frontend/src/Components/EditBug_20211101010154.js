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
        creator: bugInfo.creator,
        version: bugInfo.version,
        time: bugInfo.time
    })

    const onChange = name => event => {
        setValues({[name]: event.target.value})
    }
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
                            <td className="right"><input type="text" value={values.name} /></td>
                        </tr>
                        <tr>
                            <td className="left">Details:</td>
                            <td className="right"><input type="text" value={values.details} /></td>
                        </tr>
                        <tr>
                            <td className="left">Steps:</td>
                            <td className="right"><input type="text" value={values.steps} /></td>
                        </tr>
                        <tr>
                            <td className="left">Priority:</td>
                            <td className="right"><input type="text" value={values.priority} /></td>
                        </tr>
                        <tr>
                            <td className="left">Creator:</td>
                            <td className="right"><input type="text" value={values.creator} /></td>
                        </tr>
                        <tr>
                            <td className="left">App version:</td>
                            <td className="right"><input type="text" value={values.version} /></td>
                        </tr>
                        <tr>
                            <td className="left">Time created:</td>
                            <td className="right"><input type="text" value={values.time} /></td>
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