import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import TodoForm from "../components/TodoForm";

import buckets from "../data/buckets";

const initialTodo = {
    name: "",
    repository: "",
    description: "",
    done: false,
};

const TodoNew = () => {
    const { id } = useParams();
    const [bucket, setBucket] = useState({});
    const [todo, setTodo] = useState(initialTodo);

    useEffect(() => {
        let bc = buckets.find((buck) => buck.id === parseInt(id));

        setBucket(bc);
    }, [id]);

    useEffect(() => {
        console.log(todo);
    }, [todo]);

    const handleTodo = (newTodo) => {
        setTodo(newTodo);
    };

    return (
        <>
            {bucket?.id && (
                <div className="mx-3 p-4">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h1>Create new Todo</h1>
                            <Link
                                to={`/buckets/${bucket.id}`}
                                className="btn btn-primary text-white"
                            >
                                <FontAwesomeIcon icon={faArrowLeft} />
                                <span className="ms-2">Back</span>
                            </Link>
                        </div>

                        <TodoForm todo={todo} handleTodo={handleTodo} />
                    </div>
                </div>
            )}
        </>
    );
};

export default TodoNew;
