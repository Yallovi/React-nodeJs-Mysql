import axios from "axios";
import {setUser} from "../reducers/userReducer";

export const reqApi = async(name) => {
    debugger;
    try {
        const response = await axios.post(`http://localhost:5000/api/users/add`, {name});
        alert(response.data);
        
    } catch (error) {
        alert(error);
    }
};

export const registrathionApi  = async(name, last_name, email, password) => {
    try{
        const response = await axios.post(`http://localhost:5000/api/auth/signup`, {
            name, 
            last_name,
            email, 
            password
            
        });
        console.log(response.data);
    }catch(error) {
        console.log(error);
    }
};

export const authorizationApi  = (email, password) => {

    return async dispatch =>{
        try{
            const response = await axios.post(`http://localhost:5000/api/auth/signin`, {
                email, 
                password
            });
            dispatch(setUser(response.data.values.user));
            localStorage.setItem('token', response.data.values.token);
        }catch(error) {
            console.log(error);
        }
    };
};