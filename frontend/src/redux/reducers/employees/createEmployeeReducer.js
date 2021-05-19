const { CREATE_EMPLOYEE_REQUEST, CREATE_EMPLOYEE_SUCCESS, CREATE_EMPLOYEE_FAIL } = require("../../actions/actionTypes");

const createEmployeeReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_EMPLOYEE_REQUEST:
            return {
                loading: true,
            };
        case CREATE_EMPLOYEE_SUCCESS:
            return {
                employee: action.payload,
            };

        case CREATE_EMPLOYEE_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export { createEmployeeReducer };