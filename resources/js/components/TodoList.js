import PaginationNav from "./PaginationNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faTimes,
    faPlus,
    faEye,
    faPencilAlt,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";

const TodoList = ({ todos }) => {
    return (
        <div className="card mt-4">
            <div className="card-body">
                <div className="card-title d-flex justify-content-between align-items-center">
                    <h2>Todo Lists</h2>
                    <a href="/" className="btn btn-success text-white">
                        <FontAwesomeIcon icon={faPlus} />
                        <span className="ms-2">Create new Todo List</span>
                    </a>
                </div>

                <div className="card-text">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover align-middle">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">items</th>
                                    <th className="text-center">Completed</th>
                                    <th className="d-flex justify-content-end">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {todos.map((todo) => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td className="text-center">
                                            {todo.name}
                                        </td>
                                        <td className="text-center">
                                            {todo.completed}/{todo.items}
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
                                                        icon={faEye}
                                                    />
                                                </a>
                                                <a
                                                    href="/"
                                                    className="btn btn-warning"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faPencilAlt}
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="btn btn-danger text-white"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faTrash}
                                                    />
                                                </a>
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
        </div>
    );
};

export default TodoList;
