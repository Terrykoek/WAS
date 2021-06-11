//action files describes what happened
import axios from 'axios';
import {
  CREATE_LEAVE_FAIL,
  CREATE_LEAVE_REQUEST,
  CREATE_LEAVE_SUCCESS,
  FETCH_LEAVE_FAIL,
  FETCH_LEAVE_SUCCESS,
  FETCH_USERS_REQUEST,
  DELETE_LEAVE_REQUEST,
  DELETE_LEAVE_SUCCESS,
  DELETE_LEAVE_FAIL,
} from '../actionTypes';


const createLeaveAction = leaveData => {
  return async dispatch => {
    try {

      dispatch({
        type: CREATE_LEAVE_REQUEST,
      });
     
    
      const { data } = await axios.post('/api/leaves', leaveData);

      dispatch({
        type: CREATE_LEAVE_SUCCESS,
        payload: data,
      });



    } catch (error) {
      dispatch({
        type: CREATE_LEAVE_FAIL,
        payload: error.response && error.response.data.message,
      });

    }
  };
};

//Fetch all LEAVE action

const fetchLeavesAction = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_USERS_REQUEST,
      });

      const { data } = await axios.get('/api/leaves');
      dispatch({
        type: FETCH_LEAVE_SUCCESS,
        payload: data,
      });


    } catch (error) {
      dispatch({
        type: FETCH_LEAVE_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};



const deleteLeavesAction = (id) => {
  return async dispatch => {
    try {
      dispatch({
        type: DELETE_LEAVE_REQUEST,
      });

      const { data } = await axios.delete(`/api/leaves/${id}`);

      dispatch({
        type: DELETE_LEAVE_SUCCESS,
        payload: data,
      });
      alert("Leave removed");
      window.location.reload();
    } catch (error) {
      dispatch({
        type: DELETE_LEAVE_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

export { createLeaveAction, fetchLeavesAction, deleteLeavesAction }