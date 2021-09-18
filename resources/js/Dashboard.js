import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardMain from "./pages/DashboardMain";
import Footer from "./components/Footer";
import BucketNew from "./pages/BucketNew";
import BucketEdit from "./pages/BucketEdit";
import BucketView from "./pages/BucketView";
import TodoView from "./pages/TodoView";
import TodoNew from "./pages/TodoNew";
import TodoEdit from "./pages/TodoEdit";

import TaskView from "./pages/TaskView";
import TaskNew from "./pages/TaskNew";
import TaskEdit from "./pages/TaskEdit";
import axios from "axios";

const Dashboard = () => {
    const [show, setShow] = useState(true);

    const handleSidebar = (e) => {
        e.preventDefault();

        setShow(!show);
    };

    const fetchBuckets = async () => {
        const res = await axios("/api/buckets");
        console.log(res);
    };

    fetchBuckets();

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
                            path="/buckets/create-new"
                            component={BucketNew}
                        />
                        <Route
                            path="/buckets/:id"
                            exact
                            component={BucketView}
                        />
                        <Route
                            path="/buckets/:id/edit"
                            exact
                            component={BucketEdit}
                        />
                        <Route
                            path="/buckets/:id/create-new"
                            exact
                            component={TodoNew}
                        />
                        <Route
                            path="/buckets/:id/:todoid"
                            exact
                            component={TodoView}
                        />
                        <Route
                            path="/buckets/:id/:todoid/edit"
                            exact
                            component={TodoEdit}
                        />
                        <Route
                            path="/buckets/:id/:todoid/create-new"
                            exact
                            component={TaskNew}
                        />
                        <Route
                            path="/buckets/:id/:todoid/:taskid"
                            exact
                            component={TaskView}
                        />
                        <Route
                            path="/buckets/:id/:todoid/:taskid/edit"
                            exact
                            component={TaskEdit}
                        />
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
