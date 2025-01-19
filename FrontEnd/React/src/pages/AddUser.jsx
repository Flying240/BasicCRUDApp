import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
    const navigate = useNavigate(); // Hook for programmatic navigation

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [error, setError] = useState(null);

    const changeInputName = (e) => {
        setName(e.target.value);
    };
    const changeInputAge = (e) => {
        setAge(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { name, age };
        try {
            const response = await axios.post(
                "http://localhost:3000/add",
                data
            );
            console.log("User added:", response.data);

            setError(null);
            navigate("/home");
        } catch (error) {
            console.error("Error adding user:", error);
            setError(error.message);
        }
    };

    return (
        <div>
            {error && <div>{error}</div>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="enter name"
                    onChange={changeInputName}
                ></input>

                <input
                    type="number"
                    placeholder="enter age"
                    onChange={changeInputAge}
                ></input>

                <button type="submit">Add user</button>
            </form>
        </div>
    );
};

export default AddUser;
