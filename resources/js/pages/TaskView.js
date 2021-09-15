import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";

import buckets from "../data/buckets";

const TaskView = () => {
    const { id, todoid, taskid } = useParams();
    const [task, setTask] = useState({});

    useEffect(() => {
        let bc = buckets.find((buck) => buck.id === parseInt(id));
        let td =
            bc && 0 < bc.todos.length
                ? bc.todos.find((tdo) => tdo.id === parseInt(todoid))
                : null;
        let ts =
            bc && td && 0 < td.tasks.length
                ? td.tasks.find((tsk) => tsk.id === parseInt(taskid))
                : {};

        setTask(ts);
    }, [id, todoid, taskid]);

    return (
        <>
            {task?.id && (
                <div className="mx-3 p-4">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h1>
                                {task.done && (
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="text-success"
                                    />
                                )}
                                &nbsp;
                                {task.name}
                            </h1>
                            <Link
                                to={`/buckets/${id}/${todoid}`}
                                className="btn btn-primary text-white"
                            >
                                <FontAwesomeIcon icon={faArrowLeft} />
                                <span className="ms-2">Back</span>
                            </Link>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{task.name}</h5>
                                <p className="card-text">{task.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TaskView;
