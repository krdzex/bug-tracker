import React from 'react';

const CreateBugs = () => {
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
                            <td className="right"><input type="text"  value={bugInfo.details} /></td>
                        </tr>
                        <tr>
                            <td className="left">Steps:</td>
                            <td className="right"><input type="text"  value={bugInfo.steps} /></td>
                        </tr>
                        <tr>
                            <td className="left">Priority:</td>
                            <td className="right"><input type="text"  value={bugInfo.priority} /></td>
                        </tr>
                        <tr>
                            <td className="left">Creator:</td>
                            <td className="right"><input type="text"  value={bugInfo.creator} /></td>
                        </tr>
                        <tr>
                            <td className="left">Assigned:</td>
                            <td className="right"><input type="text"  value={bugInfo.assigned} /></td>
                        </tr>
                        <tr>
                            <td className="left">App version:</td>
                            <td className="right"><input type="text"  value={bugInfo.version} /></td>
                        </tr>

                    </tbody>
                </table>
                <div className="buttons create">
                    <button id="edit" onClick={() => dispatch(changeShow("edit"))}>
                        Create Bug
                    </button>


                </div>
            </div>
        </div>
    );
};

export default CreateBugs;