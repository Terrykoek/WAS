//Reducers are functions that take the current state and an action as arguments, and return a new state result. 
//In other words, (state, action) => newState.

const { CREATE_LEAVE_REQUEST, CREATE_LEAVE_SUCCESS, CREATE_LEAVE_FAIL } = require("../../actions/actionTypes");

const createLeaveReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_LEAVE_REQUEST:
            return {
                loading: false,
            };
            //IF SUCCESS, put property payload:data to LEAVE
        case CREATE_LEAVE_SUCCESS:
            return {
                leave: action.payload,
            };
            //if something goes wrong, return the error
        case CREATE_LEAVE_FAIL:
            return {
                loading: true,
                error: action.payload,
            };

        default:
            return state;
    }
};

export { createLeaveReducer };