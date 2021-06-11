//action tells reducer to manipulate the store data
import axios from 'axios';
import {
  CREATE_EMPLOYEE_FAIL,
  CREATE_EMPLOYEE_REQUEST,
  CREATE_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_FAIL,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_USERS_REQUEST,
  DELETE_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_FAIL,
  EMPLOYEE_UPDATE_REQUEST,
  EMPLOYEE_UPDATE_SUCCESS,
  EMPLOYEE_UPDATE_FAIL
} from '../actionTypes';

//create employeeaction 
const createEmployeeAction = employeeData => {
  return async dispatch => {
    try {
      //
      dispatch({
        type: CREATE_EMPLOYEE_REQUEST,
      });
      //pass in the employeedata keyed in and pass to post route dispatching the action

      const { data } = await axios.post('/api/employees', employeeData);
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
//
const fetchEmployeesAction = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_USERS_REQUEST,
      });

      const { data } = await axios.get('/api/employees');
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


const updateEmployeesAction = (id, employeedata) => {
  return async dispatch => {
    try {


      dispatch({
        type: EMPLOYEE_UPDATE_REQUEST,
      });

      //pass in the employeedata keyed in and pass to put route dispatching the action

      const { data } = await axios.put(`/api/employees/${id}`, employeedata);

      dispatch({
        type: EMPLOYEE_UPDATE_SUCCESS,
        payload: data,
      });
      alert("Employee Updated");

    } catch (error) {

      dispatch({
        type: EMPLOYEE_UPDATE_FAIL,
        payload: error.response && error.response.data.message,
      });

    }
  };
};


const deleteEmployeesAction = (id) => {
  return async dispatch => {
    try {
      dispatch({
        type: DELETE_EMPLOYEE_REQUEST,
      });

      const { data } = await axios.delete(`/api/employees/${id}`);

      dispatch({
        type: DELETE_EMPLOYEE_SUCCESS,
        payload: data,
      });
      alert("Employee removed");
      window.location.reload();
    } catch (error) {
      dispatch({
        type: DELETE_EMPLOYEE_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

export { createEmployeeAction, fetchEmployeesAction, updateEmployeesAction, deleteEmployeesAction }