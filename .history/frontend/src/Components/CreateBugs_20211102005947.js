import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import authHalper from '../ApiService/authHalper';
import { createBug } from '../ApiService/bugApi';
import { listUserNames } from '../ApiService/userAuth';

const CreateBugs = () => {

    useEffect(() => {
        listUserNames().then(response => dispatchEvent).catch(reason => console.log(reason))
    }, [])
    const workers = useSelector(state => state.workersListReducer)
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

    const onReleasePriority = () => {
        if (values.priority === "") {
            setValues({ ...values, priority: "" })
        }
    }
    const onReleaseAssigned = () => {
        if (values.assigned === "") {
            setValues({ ...values, assigned: "" })
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
                setValues({
                    name: "",
                    details: "",
                    steps: "",
                    priority: "",
                    assigned: "",
                    version: ""
                })
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
                                }} onChange={onChange("priority")} onBlur={() => onReleasePriority()} />
                                <datalist id="bugPriority">
                                    {workers.map((worker, id) => {
                                        return <option value={worker} key={id} />
                                    })}
                                </datalist>
                            </td>
                        </tr>
                        <tr>
                            <td className="left">Assigned:</td>
                            <td className="right">
                                <input type="text" list="assigned" onMouseDown={() => setValues({ ...values, assigned: "" })} value={values.assigned} onKeyDown={(event) => {
                                    event.preventDefault();
                                }} onChange={onChange("assigned")} onBlur={() => onReleaseAssigned()} />
                                <datalist id="assigned">
                                    <option value="Low" />
                                    <option value="Medium" />
                                    <option value="High" />
                                </datalist>
                            </td>
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