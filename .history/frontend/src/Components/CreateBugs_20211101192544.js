import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authHalper from '../ApiService/authHalper';
import { createBug } from '../ApiService/bugApi';

const CreateBugs = () => {
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        name: "",
        details: "",
        steps: "",
        priority: "",
        assigned: "",
        version: ""
    })

    const onChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onRelease = () => {
        if (values.priority === "") {
            setValues({ ...values, priority: "" })
        }
    }

    const onSubmit = () => {
        let bug = {
            name: values.name,
            details: values.details,
            steps: values.steps,
            priority: values.priority.toLowerCase(),
            assigned: values.assigned,
            version: values.version,
            creator: authHalper.isAuthentcated().user.userName
        }
        createBug(bug).then(response => {
            if (response.message) {

            }
        }).catch(err => console.log(err))
    }

    return (
        <div className="singleBugWrapper">
            <div className="bugCard">
                <div className="bugHeader">
                    Create Bug
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
                                <input type="text" list="bugPriority" onMouseDown={() => setValues({ ...values, priority: "" })} value={values.priority} onKeyDown={(event) => {
                                    event.preventDefault();
                                }} onChange={onChange("priority")} onBlur={() => onRelease()} />
                                <datalist id="bugPriority">
                                    <option value="Low" />
                                    <option value="Medium" />
                                    <option value="High" />
                                </datalist>
                            </td>
                        </tr>
                        <tr>
                            <td className="left">Assigned:</td>
                            <td className="right"><input type="text" value={values.assigned} onChange={onChange("assigned")} /></td>
                        </tr>
                        <tr>
                            <td className="left">App version:</td>
                            <td className="right"><input type="text" value={values.version} onChange={onChange("version")} /></td>
                        </tr>
                    </tbody>
                </table>
                <div className="buttons create">
                    <button id="edit" onClick={() => onSubmit()}>
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateBugs;