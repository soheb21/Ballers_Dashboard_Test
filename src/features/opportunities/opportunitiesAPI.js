import axios from "axios"

const API_URL = "http://localhost:8000"
export const fetchData = async () => {
    try {
        const response = await axios.get(`${API_URL}/opportunities`)
        return response.data;

    } catch (e) {
        //server error
        if (e) {
            throw ("something went wrong")
        }

    }
}
export const fetchDetailsByID = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/opportunities/${id}`)
        return response.data;

    } catch (e) {
        //server error
        if (e) {
            throw ("something went wrong")
        }

    }
}