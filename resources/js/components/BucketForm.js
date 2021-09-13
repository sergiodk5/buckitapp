import { useState, useEffect } from "react";

const BucketForm = ({ bucket, handleBucket }) => {
    const [newBucket, setNewBucket] = useState(bucket);

    useEffect(() => {
        setNewBucket(bucket);
    }, [bucket]);

    const handleInput = (e) => {
        const value =
            "done" === e.target.name ? e.target.checked : e.target.value;

        setNewBucket({
            ...newBucket,
            [e.target.name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        handleBucket(newBucket);
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
                    placeholder="That's a secret b!tch"
                    value={newBucket.name}
                    onChange={handleInput}
                />
                <div id="nameHelp" className="form-text">
                    Give a name to your dream
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="repository" className="form-label">
                    Repository
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="repository"
                    name="repository"
                    aria-describedby="repositoryHelp"
                    placeholder="https://github.com/the-one/aswesome-idea"
                    value={newBucket.repository}
                    onChange={handleInput}
                />
                <div id="repositoryHelp" className="form-text">
                    Does your idea has a git?
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
                    placeholder="Hold your horses I'm describing"
                    defaultValue={newBucket.description}
                    onChange={handleInput}
                ></textarea>
                <div id="descriptionHelp" className="form-text">
                    Make us cry with tears of joy and success
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
                        value={newBucket.done ? newBucket.done : false}
                        checked={newBucket.done}
                        onChange={handleInput}
                    />
                    <label className="form-check-label" htmlFor="done">
                        Done
                    </label>
                </div>
                <div id="doneHelp" className="form-text">
                    If it was done I would be a millionaire and I would have
                    hired someone to keep notes...
                </div>
            </div>

            <button type="submit" className="btn btn-success text-white">
                Submit
            </button>
        </form>
    );
};

BucketForm.defaultProps = {
    bucket: {},
};

export default BucketForm;
