import axios from "axios";

export const reqApi = async(name) => {
    debugger;
    try {
        const response = await axios.post(`http://localhost:5000/api/users/add`, {name});
        alert(response.data);
        
    } catch (error) {
        alert(error);
    }
};