import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import TodoList from "../components/TodoList";

import buckets from "../data/buckets";

const BucketView = () => {
    const { id } = useParams();

    const [bucket, setBucket] = useState({});

    useEffect(() => {
        let bc = buckets.find((buck) => buck.id === parseInt(id));
        setBucket(bc);
    }, [id]);

    return (
        <>
            {bucket?.id && (
                <div className="mx-3 p-4">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h1>
                                {bucket.done && (
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="text-success"
                                    />
                                )}
                                &nbsp;
                                {bucket.name}
                            </h1>
                            <Link to="/" className="btn btn-primary text-white">
                                <FontAwesomeIcon icon={faArrowLeft} />
                                <span className="ms-2">Back</span>
                            </Link>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{bucket.name}</h5>
                                {bucket.repository && (
                                    <p className="text-muted">
                                        Repository:{" "}
                                        <a
                                            href={bucket.repository}
                                            target="_blank"
                                        >
                                            {bucket.repository}
                                        </a>
                                    </p>
                                )}
                                <p className="card-text">
                                    {bucket.description}
                                </p>
                            </div>
                        </div>

                        {bucket?.todos && 0 < bucket.todos.length && (
                            <TodoList bucket={bucket.id} todos={bucket.todos} />
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default BucketView;
