import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allBugs, changeShow, closePopUp, openPopUp } from '../Actions';
import { completeBug, deleteBug } from '../ApiService/bugApi';

const SingleBug = () => {
    const bugInfo = useSelector(state => state.bugReducer)
    const dispatch = useDispatch()
    const bugs = useSelector(state => state.allBugsReducer)

    const onDelete = () => {
        deleteBug(bugInfo._id).then(response => {
            if (response.message) {
                dispatch(allBugs(bugs.filter((bug) => bug._id !== bugInfo._id)))
                dispatch(changeShow("allBugs"))
                dispatch(openPopUp("Successfuly deleted bug!"))
                setTimeout(() => {
                    dispatch(closePopUp())
                }, 3000);
            }
        }).catch(err => console.log(err))
    }

    const onComplete = () => {
        completeBug(bugInfo._id).then(response => console.log(response)).catch(reason => console.log(reason))
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
                            <td className="right"><input type="text" disabled value={bugInfo.priority} /></td>
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
                    <button id="delete" onClick={() => onDelete()}>
                        Delete
                    </button>
                    <button id="edit" onClick={() => dispatch(changeShow("edit"))}>
                        Edit
                    </button>
                    <button id="complete" onClick={() =>onComplete}>
                        Complete
                    </button>

                </div>
                <div className="exit" onClick={() => dispatch(changeShow("allBugs"))}></div>
            </div>
        </div>
    );
};

export default SingleBug;