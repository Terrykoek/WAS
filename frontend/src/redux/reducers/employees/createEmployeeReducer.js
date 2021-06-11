//Reducers are functions that take the current state and an action as arguments, and return a new state result. 
//In other words, (state, action) => newState.

const { CREATE_EMPLOYEE_REQUEST, CREATE_EMPLOYEE_SUCCESS, CREATE_EMPLOYEE_FAIL } = require("../../actions/actionTypes");

const createEmployeeReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_EMPLOYEE_REQUEST:
            return {
                loading: false,
            };
            //if success, take the current state of employee and pass action payload to return a new state
        case CREATE_EMPLOYEE_SUCCESS:
            return {
                employee: action.payload,
            };
            //if something goes wrong, return the error
        case CREATE_EMPLOYEE_FAIL:
            return {
                loading: true,
                error: action.payload,
            };

        default:
            return state;
    }
};

export { createEmployeeReducer };