import axios from "axios";
import {setUser} from "../reducers/userReducer";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
});

export const reqApi = async(task) => {
    return await axios.post(`http://localhost:5000/api/users/add`, {task})
    .then(response =>{
        return response
    }) 
    .catch(e => {
        console.log(e.response);
        return e.response
    })
};

export const authApi = {
    login(email,password){
        return instance.post(`auth/signin`, {email,password})
        .then(response =>{
            console.log(response);
            localStorage.setItem('token', response.data.values.token);
            return response; 
            
        });
        
    },
    registration(name, last_name, email, password){
        return instance.post(`auth/signup`, {name,last_name,email,password})
            .then(response =>{
                return response
            });
    },
    privateOffice(name, last_name, status){
        console.log(name, last_name, status)
        return instance.post(`auth/privateOffice`, {name,last_name,status})
            .then(response =>{
                return response
            });
    }

};
export const authentication  = () => {
    return async dispatch =>{
        try{
            const response = await instance.get(`auth/authentication`, 
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            );
            const user = response.data.values.user;
            dispatch(setUser(user));
            localStorage.setItem('token', response.data.values.token);
        }catch(error) {
            console.log(error);
            localStorage.removeItem('token');
        }
    };
};


