import {
    FETCH_LEAVE_FAIL,
    FETCH_LEAVE_REQUEST,
    FETCH_LEAVE_SUCCESS,
  } from '../../actions/actionTypes';
  
  const leaveListReducer = (state = [], action) => {
    switch (action.type) {
      case FETCH_LEAVE_REQUEST:
        return {
          loading: true,
        };
      case FETCH_LEAVE_SUCCESS:
        return {
          leaves: action.payload,
        };
  
      case FETCH_LEAVE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export { leaveListReducer };