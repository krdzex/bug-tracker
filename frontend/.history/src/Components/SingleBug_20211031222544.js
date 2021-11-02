import React from 'react';
import { useSelector } from 'react-redux';

const SingleBug = () => {
    const bugInfo = useSelector(state => state.bugReducer)
    return (
        <div className="singleBugWrapper">
            <div className="bugCard">
                <div className="bugHeader">
                    {bugInfo.name}
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>Details</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>Steps</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>Prio</td>
                            <td>22</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SingleBug;