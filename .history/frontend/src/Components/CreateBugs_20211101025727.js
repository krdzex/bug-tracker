import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

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
                            <td className="right"><input type="text" value={values.details} onChange={onChange("name")}/></td>
                        </tr>
                        <tr>
                            <td className="left">Details:</td>
                            <td className="right"><input type="text" value={values.details} onChange={onChange("name")}/></td>
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
                            <td className="left">Assigned:</td>
                            <td className="right"><input type="text" value={values.assigned} /></td>
                        </tr>
                        <tr>
                            <td className="left">App version:</td>
                            <td className="right"><input type="text" value={values.version} /></td>
                        </tr>
                    </tbody>
                </table>
                <div className="buttons create">
                    <button id="edit">
                        Create Bug
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateBugs;