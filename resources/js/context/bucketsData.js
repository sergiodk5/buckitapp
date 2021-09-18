import { useState, createContext, useMemo } from "react";

const BucketContext = createContext();

const BucketProvider = (props) => {
    const [bucketsData, setBucketsData] = useState([]);
    const value = useMemo(
        () => ({ bucketsData, setBucketsData }),
        [bucketsData]
    );

    return (
        <BucketContext.Provider value={value}>
            {props.children}
        </BucketContext.Provider>
    );
};

export { BucketContext, BucketProvider };
