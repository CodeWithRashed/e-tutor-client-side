import axios from "axios"

export const getUserRole = async (email) => {
    const result = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/get/userRole?email=${email}`);
    return result.data[0]
}