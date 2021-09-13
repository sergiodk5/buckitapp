import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BucketForm from "../components/BucketForm";

const initialBucket = {
    name: "",
    repository: "",
    description: "",
    done: false,
};

const BucketNew = () => {
    const [bucket, setBucket] = useState(initialBucket);

    // useEffect(() => {
    //     console.log(bucket);
    // }, [bucket]);

    const handleBucket = (newBucket) => {
        setBucket(newBucket);
    };

    return (
        <div className="mx-3 p-4">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Create new Bucket</h1>
                    <Link to="/" className="btn btn-primary text-white">
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <span className="ms-2">Back</span>
                    </Link>
                </div>

                <BucketForm bucket={bucket} handleBucket={handleBucket} />
            </div>
        </div>
    );
};

export default BucketNew;
