import axios from "axios";

const API_URL = "http://localhost:8000"
export const login = async (data) => {
    const email = data.email;
    const password = data.password;
    try {

        const response = await axios.get(`${API_URL}/user?email=` + email)
        const { data } = response;
        if (data.length) {
            if (password === data[0].password) {

                const { id, email, name } = data[0];
                localStorage.setItem("user", name)
                return { id, email }

            } else {
                throw "wrong credentials";

            }
        } else {
            throw "user not found";

        }


    } catch (e) {
        if (e) {
            throw e;
        }
    }
}
export const register = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/user`, data)
        
        const { name, email } = response.data;
        localStorage.setItem("user", name)
        return email;

    } catch (e) {
        if (e) {
            throw "something went wrong";
        }
    }
}