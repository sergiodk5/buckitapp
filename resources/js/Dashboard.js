import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/SIdebar";
import Header from "./components/Header";
import DashboardMain from "./Pages/DashboardMain";
import Footer from "./components/Footer";
import BucketNew from "./Pages/BucketNew";
import BucketEdit from "./Pages/BucketEdit";
import BucketView from "./Pages/BucketView";

const Dashboard = () => {
    const [show, setShow] = useState(true);

    const handleSidebar = (e) => {
        e.preventDefault();

        setShow(!show);
    };

    return (
        <Router basename={"/dashboard/"}>
            <div className="d-flex">
                <Sidebar show={show} />
                <div
                    className="w-100"
                    style={{
                        height: "100vh",
                        maxHeight: "100vh",
                        overflowX: "hidden",
                        overflowY: "auto",
                    }}
                >
                    <Header handleSidebar={handleSidebar} />

                    <Switch>
                        <Route path="/" exact component={DashboardMain} />
                        <Route
                            path="/bucket/create-new"
                            component={BucketNew}
                        />
                        <Route path="/bucket/:id/edit" component={BucketEdit} />
                        <Route path="/bucket/:id" component={BucketView} />
                    </Switch>

                    <Footer />
                </div>
            </div>
        </Router>
    );
};

export default Dashboard;

if (document.getElementById("dashboard")) {
    ReactDOM.render(<Dashboard />, document.getElementById("dashboard"));
}
