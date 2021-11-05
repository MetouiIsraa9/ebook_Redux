import {
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    SET_CURRENT_USER
} from './types'
import jwt from "jwt-decode";
import axios from 'axios';
import { history } from '../../../index';
export const LoginSuccess = (data) => {

    return {
        type: LOGIN_SUCCESS,
        payload: data,
    }
}

export const LoginError = (data) => {

    return {
        type: LOGIN_ERROR,
        payload: data
    }
};


export function setCurrentUser(user){
    return {
        type: SET_CURRENT_USER,
        payload:user
    }
};

export const loginUser = (email, pwd) => {
   const dataLogin ={
       email : email ,
       pwd :pwd
   }

    console.log(dataLogin);
    return (dispatch) => {
        return axios.post("http://localhost:3001/users/login", dataLogin)
            .then(response => {
               localStorage.setItem('data',response.data);
                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem('refreshToken', response.data.refreshToken);
               const decode= jwt(localStorage.getItem('accessToken')); 
              
               const dataUser=decode.user;
               localStorage.setItem('user', dataUser);
               dispatch(LoginSuccess(dataUser));
               if (dataUser.isAdmin) {
                history.push({
                    pathname: "/books" ,
                    state: {
                        user: decode.user
                    }
                })
               }
               
            }) 
            .catch(error => {
                const errorPayload = {};
                errorPayload['message'] = error.message;
                errorPayload['status'] = error;
                dispatch(LoginError(errorPayload));
            });
    }


}