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
                            <td className="left">Name:</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td className="left">Details:</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td className="left">Steps:</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td className="left">Priority:</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td className="left">Assigned:</td>
                            <td className="left">22</td>
                        </tr>
                        <tr>
                            <td className="left">App version:</td>
                            <td>22</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SingleBug;