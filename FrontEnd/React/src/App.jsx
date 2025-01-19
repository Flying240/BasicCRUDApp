import React from "react";
import HomePage from "./pages/HomePage";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import AddUser from "./pages/AddUser";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/home" />}
                    ></Route>

                    <Route
                        path="/home"
                        element={<HomePage />}
                    ></Route>

                    <Route
                        path="/AddUser"
                        element={<AddUser />}
                    ></Route>
                </Routes>
            </Router>
        </>
    );
};

export default App;
