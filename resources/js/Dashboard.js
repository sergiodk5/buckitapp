import React, { useState } from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/SIdebar";

const Dashboard = () => {
    const [show, setShow] = useState(true);

    const handleSidebar = (e) => {
        e.preventDefault();

        setShow(!show);
    };

    return (
        <div
            className="d-flex"
            style={{
                height: "100vh",
                maxHeight: "100vh",
                overflowX: "hidden",
                overflowY: "auto",
            }}
        >
            <Sidebar show={show} />
            <div className="w-100">
                <Header handleSidebar={handleSidebar} />

                <div className="container">
                    <h1>Dashboard</h1>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Dashboard;

if (document.getElementById("dashboard")) {
    ReactDOM.render(<Dashboard />, document.getElementById("dashboard"));
}
