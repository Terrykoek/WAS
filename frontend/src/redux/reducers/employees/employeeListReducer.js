import {
    FETCH_EMPLOYEE_FAIL,
    FETCH_EMPLOYEE_REQUEST,
    FETCH_EMPLOYEE_SUCCESS,
  } from '../../actions/actionTypes';
  
  const employeeListReducer = (state = [], action) => {
    switch (action.type) {
      case FETCH_EMPLOYEE_REQUEST:
        return {
          loading: true,
        };
      case FETCH_EMPLOYEE_SUCCESS:
        return {
          employees: action.payload,
        };
  
      case FETCH_EMPLOYEE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export { employeeListReducer };