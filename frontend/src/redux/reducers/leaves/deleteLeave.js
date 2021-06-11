import {
    DELETE_LEAVE_REQUEST,
    DELETE_LEAVE_SUCCESS,
    DELETE_LEAVE_FAIL,
  } from '../../actions/actionTypes';
  
  const deleteLeaveReducer = (state = [], action) => {
    switch (action.type) {
      case DELETE_LEAVE_REQUEST:
        return {
          loading: true,
        };
      case DELETE_LEAVE_SUCCESS:
        return {
          leaves: action.payload,
        };
  
      case DELETE_LEAVE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export { deleteLeaveReducer};