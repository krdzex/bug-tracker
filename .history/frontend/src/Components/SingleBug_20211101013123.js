import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeShow } from '../Actions';

const SingleBug = () => {
    const bugInfo = useSelector(state => state.bugReducer)
    const dispatch = useDispatch()
    const [da, setDa] = useState("")

    const onChange = (e) =>{
        setDa(e.target.value)
    }
    return (
        <div className="singleBugWrapper">
            <div className="bugCard">
                <div className="bugHeader">
                    {bugInfo.name}
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td className="left">Details:</td>
                            <td className="right"><input type="text" disabled value={bugInfo.details} /></td>
                        </tr>
                        <tr>
                            <td className="left">Steps:</td>
                            <td className="right"><input type="text" disabled value={bugInfo.steps} /></td>
                        </tr>
                        <tr>
                            <td className="left">Priority:</td>
                            <td className="right">
                                <input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" value={da} onKeyDown={(event) => {
                                    event.preventDefault();
                                }} onChange={e}/>
                                <datalist id="ice-cream-flavors">
                                    <option value="Option 1" onClick={() => console.log("AA")} />
                                    <option value="Option 2" onClick={() => setDa("Option 2")} />
                                    <option value="Option 3" onClick={() => setDa("Option 3")} />
                                </datalist>
                            </td>
                        </tr>
                        <tr>
                            <td className="left">Creator:</td>
                            <td className="right"><input type="text" disabled value={bugInfo.creator} /></td>
                        </tr>
                        <tr>
                            <td className="left">Assigned:</td>
                            <td className="right"><input type="text" disabled value={bugInfo.assigned} /></td>
                        </tr>
                        <tr>
                            <td className="left">App version:</td>
                            <td className="right"><input type="text" disabled value={bugInfo.version} /></td>
                        </tr>
                        <tr>
                            <td className="left">Time created:</td>
                            <td className="right"><input type="text" disabled value={bugInfo.time} /></td>
                        </tr>
                    </tbody>
                </table>
                <div className="buttons">
                    <button id="delete">
                        Delete
                    </button>
                    <button id="edit" onClick={() => dispatch(changeShow("edit"))}>
                        Edit
                    </button>
                    <button id="complete">
                        Complete
                    </button>

                </div>
                <div className="exit" onClick={() => dispatch(changeShow("allBugs"))}></div>
            </div>
        </div>
    );
};

export default SingleBug;