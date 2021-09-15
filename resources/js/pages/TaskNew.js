import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import TaskForm from "../components/TaskForm";

import buckets from "../data/buckets";

const initialTask = {
    name: "",
    description: "",
    done: false,
};

const TaskNew = () => {
    const { id, todoid } = useParams();
    const [bucket, setBucket] = useState({});
    const [todo, setTodo] = useState({});
    const [task, setTask] = useState(initialTask);

    useEffect(() => {
        let bc = buckets.find((buck) => buck.id === parseInt(id));
        let td =
            bc && 0 < bc.todos.length
                ? bc.todos.find((tdo) => tdo.id === parseInt(todoid))
                : {};

        setBucket(bc);
        setTodo(td);
    }, [id]);

    useEffect(() => {
        console.log(task);
    }, [task]);

    const handleTask = (newTask) => {
        setTask(newTask);
    };

    return (
        <>
            {todo?.id && (
                <div className="mx-3 p-4">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h1>Create new Task</h1>
                            <Link
                                to={`/buckets/${bucket.id}/${todo.id}`}
                                className="btn btn-primary text-white"
                            >
                                <FontAwesomeIcon icon={faArrowLeft} />
                                <span className="ms-2">Back</span>
                            </Link>
                        </div>

                        <TaskForm task={task} handleTask={handleTask} />
                    </div>
                </div>
            )}
        </>
    );
};

export default TaskNew;
