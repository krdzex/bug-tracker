import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBug, allBugs, changeShow } from '../Actions';
import { listBugs } from '../ApiService/bugApi';
import EditBug from './EditBug';
import SingleBug from './SingleBug';
import moment from "moment"
import { Icon } from '@iconify/react';
const ViewBugs = () => {
    const dispatch = useDispatch()

    const show = useSelector(state => state.bugsShowReducer)
    const bugs = useSelector(state => state.allBugsReducer)

    useEffect(() => {
        listBugs().then(response => {
            response.forEach(bug => {
                bug.time = moment(bug.time).format('DD/MM/YYYY - HH:mm')
            });
            dispatch(allBugs(response))
        }).catch(err => console.log(err))
    }, [dispatch, show])



    const whatToShow = (show, bug) => {
        dispatch(changeShow(show))
        dispatch(addBug(bug))
    }

    return (
        <div>
            {show === "allBugs" ? <div className="bugsWrapper">
                <div className="mapWrapper">
                    {bugs.map((bug, id) => {
                        return <div key={id} className={bug.complete ? "bug complete " + bug.priority : "bug " + bug.priority} onClick={() => whatToShow("singleBug", bug)}>
                            <span>Bug {id + 1}: {bug.name}</span>
                            <span>{bug.priority}</span>
                            <span>{bug.version}</span>
                            {bug.complete && (<div className="iconComplete">
                                <Icon icon="el:ok" />
                            </div>)}
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