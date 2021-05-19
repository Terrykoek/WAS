import axios from 'axios';
const { CREATE_EMPLOYEE_REQUEST, CREATE_EMPLOYEE_SUCCESS } = require("./actionTypes");

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
                type: CRAETE_EMPLOYEE_FAIL,
                payload: error.response && error.response.data.message,
            });

        }
    };
};


export { createEmployeeAction }