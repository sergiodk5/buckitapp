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
                            path="/buckets/create-new"
                            component={BucketNew}
                        />
                        <Route
                            path="/buckets/:id/edit"
                            exact
                            component={BucketEdit}
                        />
                        <Route
                            path="/buckets/:id/:todoid"
                            component={TodoView}
                        />
                        <Route path="/buckets/:id" component={BucketView} />
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
