import { useState, useEffect } from "react";

const TodoForm = ({ todo, handleTodo }) => {
    const [newTodo, setNewTodo] = useState(todo);

    useEffect(() => {
        setNewTodo(todo);
    }, [todo]);

    const handleInput = (e) => {
        const value =
            "done" === e.target.name ? e.target.checked : e.target.value;

        setNewTodo({
            ...newTodo,
            [e.target.name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        handleTodo(newTodo);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    aria-describedby="nameHelp"
                    placeholder="Another Todo List"
                    value={newTodo.name}
                    onChange={handleInput}
                />
                <div id="nameHelp" className="form-text">
                    Here we go again.. Tell us the name of the list
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="3"
                    aria-describedby="descriptionHelp"
                    placeholder="One more todo list that YOU have to ignore once again..."
                    defaultValue={newTodo.description}
                    onChange={handleInput}
                ></textarea>
                <div id="descriptionHelp" className="form-text">
                    Try to describe the list
                </div>
            </div>

            <div className="mb-3">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="done"
                        id="done"
                        aria-describedby="doneHelp"
                        value={newTodo.done ? newTodo.done : false}
                        checked={newTodo.done}
                        onChange={handleInput}
                    />
                    <label className="form-check-label" htmlFor="done">
                        Done
                    </label>
                </div>
                <div id="doneHelp" className="form-text">
                    Let's hope you will make it true some day...
                </div>
            </div>

            <button type="submit" className="btn btn-success text-white">
                Submit
            </button>
        </form>
    );
};

TodoForm.defaultProps = {
    todo: {},
};

export default TodoForm;
