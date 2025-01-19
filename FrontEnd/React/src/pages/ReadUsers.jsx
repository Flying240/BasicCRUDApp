import React, { useState, useEffect } from "react";
import getAllUsers from "../Components/getAllUsers";
import axios from "axios";

const ReadUsers = () => {
    // State variables
    const [data, setData] = useState([]);
    const [error, setError] = useState(null); // Error message
    const [editUser, setEditUser] = useState(null); // User being edited
    const [showModal, setShowModal] = useState(false); // Modal visibility

    // Fetch users from API
    const fetchUsers = async () => {
        try {
            const users = await getAllUsers();
            setData(users);
        } catch (err) {
            console.error("Error fetching users:", err);
            setError("Failed to fetch users.");
        }
    };

    // Fetch users on component mount, only once it will run
    useEffect(() => {
        fetchUsers();
    }, []);

    // Open the edit modal with selected user data
    const openEditModal = (user) => {
        setEditUser({ ...user }); // Set user data in state
        setShowModal(true); // Show modal
    };

    // Save changes to edited user
    const handleEditSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            // Update user on the server
            await axios.post(
                `http://localhost:3000/edit/${editUser._id}`,
                editUser
            );

            fetchUsers();
            setError(null);

            setShowModal(false); // Close modal
        } catch (err) {
            setError('Error Updating User');
            console.error("Error updating user:", err);
        }
    };

    // Delete a user
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/delete/${id}`);

            setData(data.filter((user) => user._id !== id)); // Update state after deletion

            setError(null);
            fetchUsers(); // Refresh user list
        } catch (err) {
            console.error("Error deleting user:", err);
        }
    };

    // Display error message if there's an error
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>User List</h2>

            {data.length > 0 ? (
                <ul>
                    {data.map((user) => (
                        <li key={user._id}>
                            {user.name} - {user.age}
                            <button onClick={() => openEditModal(user)}>
                                Edit
                            </button>
                            <button onClick={() => handleDelete(user._id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading users...</p>
            )}

            {/* Edit Modal */}
            {showModal && editUser && (
                <div className="modal">
                    {error && <div>{error}</div>}

                    <h3>Edit User</h3>
                    <form onSubmit={handleEditSubmit}>
                        <input
                            type="text"
                            value={editUser.name}
                            onChange={(e) =>
                                setEditUser({
                                    ...editUser,
                                    name: e.target.value,
                                })
                            }
                            placeholder="Name"
                        />
                        <input
                            type="number"
                            value={editUser.age}
                            onChange={(e) =>
                                setEditUser({
                                    ...editUser,
                                    age: e.target.value,
                                })
                            }
                            placeholder="Age"
                        />
                        <button type="submit">Save</button>
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ReadUsers;
