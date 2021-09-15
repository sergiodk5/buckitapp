import { Link } from "react-router-dom";
import PaginationNav from "../components/PaginationNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEye,
    faTrash,
    faPencilAlt,
    faPlus,
    faCheck,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";

import buckets from "../data/buckets";

const DashboardMain = () => {
    const handleDelete = (e, id) => {
        e.preventDefault();

        console.log(id);
    };
    return (
        <div className="mx-3 p-4">
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Buckets</h1>
                    <Link
                        to="/bucket/create-new"
                        className="btn btn-success text-white"
                    >
                        <FontAwesomeIcon icon={faPlus} />
                        <span className="ms-2">Create new bucket</span>
                    </Link>
                </div>

                <div className="table-responsive">
                    <table className="table table-striped table-hover align-middle">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Lists</th>
                                <th className="text-center">Completed</th>
                                <th className="d-flex justify-content-end">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {buckets.map((bucket) => (
                                <tr key={bucket.id}>
                                    <td>{bucket.id}</td>
                                    <td className="text-center">
                                        {bucket.name}
                                    </td>
                                    <td className="text-center">
                                        {bucket.completed}/{bucket.lists}
                                    </td>
                                    <td className="text-center">
                                        <FontAwesomeIcon
                                            icon={
                                                bucket.done ? faCheck : faTimes
                                            }
                                            className={`text-${
                                                bucket.done ? "success" : "info"
                                            }`}
                                        />
                                    </td>
                                    <td className="d-flex justify-content-end">
                                        <div className="btn-group">
                                            <Link
                                                to={`/buckets/${bucket.id}`}
                                                className="btn btn-primary text-white"
                                            >
                                                <FontAwesomeIcon icon={faEye} />
                                            </Link>
                                            <Link
                                                to={`/buckets/${bucket.id}/edit`}
                                                className="btn btn-warning"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faPencilAlt}
                                                />
                                            </Link>
                                            <button
                                                className="btn btn-danger text-white"
                                                onClick={(e) =>
                                                    handleDelete(e, bucket.id)
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <PaginationNav />
            </div>
        </div>
    );
};

export default DashboardMain;