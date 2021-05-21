import axios from 'axios';
import { USER_LOGIN_SUCCESS, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from '../actionTypes';



const registerUserAction = (name, email, password) => {
    return async dispatch => {
        try {
            dispatch({
                type: USER_REGISTER_REQUEST
            });

            //make actual call
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },

            };

            const { data } = await axios.post(
                '/api/users/register',
                {
                    name,
                    email,
                    password,
                },
                config
            );

            dispatch({
                type: USERS_REGISTER_SUCCESS,
                payload: data,
            });

            //save the user into localstorage
            localStorage.setitem('userAuthData', JSON.stringify(data));
        } catch (error) {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: error.response && error.response.data.message,
            });
        }
    };
};

export { registerUserAction };