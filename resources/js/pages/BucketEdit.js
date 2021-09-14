import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BucketForm from "../components/BucketForm";

import buckets from "../data/buckets";

const BucketEdit = () => {
    const { id } = useParams();

    const [bucket, setBucket] = useState({});

    useEffect(() => {
        let bc = buckets.find((buck) => buck.id === parseInt(id));
        setBucket(bc);
    }, [id]);

    // useEffect(() => {
    //     console.log(bucket);
    // }, [bucket]);

    const handleBucket = (newBucket) => {
        setBucket(newBucket);
    };

    return (
        <>
            {bucket?.id && (
                <div className="mx-3 p-4">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h1>Edit Bucket {bucket.name}</h1>
                            <Link
                                to={`/buckets/${id}`}
                                className="btn btn-primary text-white"
                            >
                                <FontAwesomeIcon icon={faArrowLeft} />
                                <span className="ms-2">Back</span>
                            </Link>
                        </div>

                        <BucketForm
                            bucket={bucket}
                            handleBucket={handleBucket}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default BucketEdit;
