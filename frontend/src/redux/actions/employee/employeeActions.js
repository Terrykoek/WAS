import axios from 'axios';
import {
  CREATE_EMPLOYEE_FAIL,
  CREATE_EMPLOYEE_REQUEST,
  CREATE_EMPLOYEE_SUCCESS,
} from '../actionTypes';

const createEmployeeAction = employeeData => {
    return async dispatch => {
        try {

            dispatch({
                type: CREATE_EMPLOYEE_REQUEST,
            });

            const config = {
                'Content-Type': 'application/json',
            };

            const { data } = await axios.post('/api/employees', employeeData, config);

            dispatch({
                type: CREATE_EMPLOYEE_SUCCESS,
                payload: data,
            });



        } catch (error) {
            dispatch({
                type: CREATE_EMPLOYEE_FAIL,
                payload: error.response && error.response.data.message,
            });

        }
    };
};


export { createEmployeeAction }