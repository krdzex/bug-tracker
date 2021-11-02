import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBug, allBugs, changeShow } from '../Actions';
import { listBugs } from '../ApiService/bugApi';
import EditBug from './EditBug';
import SingleBug from './SingleBug';

const ViewBugs = () => {
    const show = useSelector(state => state.bugsShowReducer)
    const bugs = useSelector(state => state.allBugsReducer)

    useEffect(() => {
        listBugs().then(response => dispatch(allBugs(response))).catch(err => console.log(err))
    }, [,show])



    const whatToShow = (show, bug) => {
        dispatch(changeShow(show))
        dispatch(addBug(bug))
    }
    const dispatch = useDispatch()
    return (
        <div>
            {show === "allBugs" ? <div className="bugsWrapper">
                <div className="mapWrapper">
                    {bugs.map((bug, id) => {
                        return <div className={"bug " + bug.priority} onClick={() => whatToShow("singleBug", bug)}>
                            <span>Bug {id + 1}: {bug.name}</span>
                            <span>{bug.priority}</span>
                            <span>{bug.version}</span>
                        </div>
                    })}
                </div>


            </div> :
                show === "singleBug" ?
                    <SingleBug />
                    :
                    <EditBug />}
        </div>
    );
};

export default ViewBugs;