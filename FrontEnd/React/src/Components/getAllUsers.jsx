import axios from "axios";

const getAllUsers = async () => {
    try {
        const response = await axios.get("http://localhost:3000/read");
        
        console.log("API Response:", response.data);
        return response.data.data; // Extract the `data` array
        
    } catch (error) {

        console.error("Error fetching users:", error);
        throw error; // Rethrow the error to handle it in the caller
    }
};

export default getAllUsers;
