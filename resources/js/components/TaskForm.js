import { useState, useEffect } from "react";

const TaskFrom = ({ task, handleTask }) => {
    const [newTask, setnewTask] = useState(task);

    useEffect(() => {
        setnewTask(task);
    }, [task]);

    const handleInput = (e) => {
        const value =
            "done" === e.target.name ? e.target.checked : e.target.value;

        setnewTask({
            ...newTask,
            [e.target.name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        handleTask(newTask);
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
                    placeholder="Another task List"
                    value={newTask.name}
                    onChange={handleInput}
                />
                <div id="nameHelp" className="form-text">
                    Name one more task
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
                    placeholder="One more task list that YOU have to ignore once again..."
                    defaultValue={newTask.description}
                    onChange={handleInput}
                ></textarea>
                <div id="descriptionHelp" className="form-text">
                    What's the fuzz now?
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
                        value={newTask.done ? newTask.done : false}
                        checked={newTask.done}
                        onChange={handleInput}
                    />
                    <label className="form-check-label" htmlFor="done">
                        Done
                    </label>
                </div>
                <div id="doneHelp" className="form-text">
                    My the force be with you
                </div>
            </div>

            <button type="submit" className="btn btn-success text-white">
                Submit
            </button>
        </form>
    );
};

TaskFrom.defaultProps = {
    task: {},
};

export default TaskFrom;
