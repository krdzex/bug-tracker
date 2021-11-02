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
                            <td>aa</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>aa</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>aa</td>
                            <td>22</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SingleBug;