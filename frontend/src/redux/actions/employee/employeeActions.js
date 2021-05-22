import axios from 'axios';
import {
  CREATE_EMPLOYEE_FAIL,
  CREATE_EMPLOYEE_REQUEST,
  CREATE_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_FAIL,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_USERS_REQUEST,
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

//Fetch all EMPLOYEEs action

const fetchEmployeesAction = () => {
    return async dispatch => {
      try {
        dispatch({
          type: FETCH_USERS_REQUEST,
        });
  
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        //make http call to our backend
        const { data } = await axios.get('/api/employees', config);
        dispatch({
          type: FETCH_EMPLOYEE_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: FETCH_EMPLOYEE_FAIL,
          payload: error.response && error.response.data.message,
        });
      }
    };
  };
  
export { createEmployeeAction , fetchEmployeesAction}