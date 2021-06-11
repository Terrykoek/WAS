import {
    EMPLOYEE_UPDATE_REQUEST,
    EMPLOYEE_UPDATE_SUCCESS,
    EMPLOYEE_UPDATE_FAIL,
  } from '../../actions/actionTypes';
  
  const updateEmployeeReducer = (state = [], action) => {
    switch (action.type) {
      case EMPLOYEE_UPDATE_REQUEST:
        return {
          loading: true,
        };
      case EMPLOYEE_UPDATE_SUCCESS:
        return {
          employees: action.payload,
        };
  
      case EMPLOYEE_UPDATE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export { updateEmployeeReducer};