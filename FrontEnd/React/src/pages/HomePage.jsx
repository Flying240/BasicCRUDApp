import React from "react";
import { useNavigate } from "react-router-dom";
import ReadUsers from "./ReadUsers";

const HomePage = () => {
    const navigate = useNavigate(); // Hook for programmatic navigation

    const onClickButtonAdd = () => {
        navigate("/AddUser"); // Navigate to the AddUser route
    };

    return (
        <div>
            <button onClick={onClickButtonAdd}>Add User</button>
            <ReadUsers />
        </div>
    );
};

export default HomePage;
