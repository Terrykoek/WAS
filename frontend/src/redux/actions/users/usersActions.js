import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
import {
  USER_REGISTER_REQUEST,
//   USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT_SUCCESS,
} from '../actionTypes';


//register user action
const registerUserAction = (name, email, password, admin) => {
    return async dispatch => {
        try {
            dispatch({
                type: USER_REGISTER_REQUEST,
            });

            //make actual call
            // const config = {
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            // };
            //pass the user login info into post api backend
            const { data } = await axios.post(
                '/api/users/register',
                {
                    name,
                    email,
                    password,
                    admin,
                },
            );
                //if there is data, render to /route
            if (data) window.location.href = '/';

         
        } catch (error) {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: error.response && error.response.data.message,
            });
        }
    };
};

//login action

const loginUserAction = (email, password) => {
    return async dispatch => {
        try {
            dispatch({
                type: USER_LOGIN_REQUEST,
            });

        
            //axios holds 2 para, email and password
            const { data } = await axios.post('/api/users/login', { email, password });
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data,
            });

        //    userdata is define as token and admin to be pass in sessionStorage
           const userData = {
               token : data.token,
               admin : data.admin,
           }
            //save the userdata into sessionStorage so that not all info will be present
            sessionStorage.setItem('userAuthData', JSON.stringify(userData));


        } catch (error) {
            console.log(error.response)
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: error.response && error.response.data.message,
            });

        }
    };
};

//logout
const logoutUserAction = () => async dispatch => {  
    try {
        //remove user from sessionStorage
        sessionStorage.removeItem('userAuthData');

        dispatch( {
            type: USER_LOGOUT_SUCCESS,
            
        })
    } catch (error) {

    }
};


export { registerUserAction, loginUserAction, logoutUserAction };