import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faCheck,
    faTimes,
    faPlus,
    faEye,
    faPencilAlt,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";

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

                        <div className="card mt-4">
                            <div className="card-body">
                                <div className="card-title d-flex justify-content-between align-items-center">
                                    <h2>Todo Lists</h2>
                                    <a
                                        href="/"
                                        className="btn btn-success text-white"
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                        <span className="ms-2">
                                            Create new Todo List
                                        </span>
                                    </a>
                                </div>

                                <div className="card-text">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-hover align-middle">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th className="text-center">
                                                        Name
                                                    </th>
                                                    <th className="text-center">
                                                        items
                                                    </th>
                                                    <th className="text-center">
                                                        Completed
                                                    </th>
                                                    <th className="d-flex justify-content-end">
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {bucket.todos.map((todo) => (
                                                    <tr key={todo.id}>
                                                        <td>{todo.id}</td>
                                                        <td className="text-center">
                                                            {todo.name}
                                                        </td>
                                                        <td className="text-center">
                                                            {todo.completed}/
                                                            {todo.items}
                                                        </td>
                                                        <td className="text-center">
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    todo.done
                                                                        ? faCheck
                                                                        : faTimes
                                                                }
                                                                className={`text-${
                                                                    todo.done
                                                                        ? "success"
                                                                        : "info"
                                                                }`}
                                                            />
                                                        </td>
                                                        <td className="d-flex justify-content-end">
                                                            <div className="btn-group">
                                                                <a
                                                                    href="/"
                                                                    className="btn btn-primary text-white"
                                                                >
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faEye
                                                                        }
                                                                    />
                                                                </a>
                                                                <a
                                                                    href="/"
                                                                    className="btn btn-warning"
                                                                >
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faPencilAlt
                                                                        }
                                                                    />
                                                                </a>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-danger text-white"
                                                                >
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faTrash
                                                                        }
                                                                    />
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <nav aria-label="navigation">
                                        <ul className="pagination justify-content-end">
                                            <li className="page-item disabled">
                                                <a
                                                    className="page-link"
                                                    aria-label="Previous"
                                                >
                                                    <span aria-hidden="true">
                                                        &laquo;
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    href="#"
                                                >
                                                    1
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    href="#"
                                                >
                                                    2
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    href="#"
                                                >
                                                    3
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    href="#"
                                                    aria-label="Next"
                                                >
                                                    <span aria-hidden="true">
                                                        &raquo;
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BucketView;
