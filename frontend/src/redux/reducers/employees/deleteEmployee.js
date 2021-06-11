import {
    DELETE_EMPLOYEE_REQUEST,
    DELETE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_FAIL,
  } from '../../actions/actionTypes';
  
  const deleteEmployeeReducer = (state = [], action) => {
    switch (action.type) {
      case DELETE_EMPLOYEE_REQUEST:
        return {
          loading: true,
        };
      case DELETE_EMPLOYEE_SUCCESS:
        return {
          employees: action.payload,
        };
  
      case DELETE_EMPLOYEE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export { deleteEmployeeReducer};