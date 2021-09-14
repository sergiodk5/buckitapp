import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";

import buckets from "../data/buckets";

const TodoView = () => {
    const { id, todoid } = useParams();

    const [bucket, setBucket] = useState({});
    const [todo, setTodo] = useState({});

    useEffect(() => {
        let bc = buckets.find((buck) => buck.id === parseInt(id));
        let td =
            bc && 0 < bc.todos.length
                ? bc.todos.find((tdo) => tdo.id === parseInt(todoid))
                : {};
        setBucket(bc);
        setTodo(td);
    }, [id, todoid]);
    return (
        <>
            {todo?.id && (
                <div className="mx-3 p-4">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h1>
                                {todo.done && (
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="text-success"
                                    />
                                )}
                                &nbsp;
                                {bucket.name}
                            </h1>
                            <Link
                                to={`/buckets/${id}`}
                                className="btn btn-primary text-white"
                            >
                                <FontAwesomeIcon icon={faArrowLeft} />
                                <span className="ms-2">Back</span>
                            </Link>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{todo.name}</h5>
                                <p className="card-text">{todo.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TodoView;
