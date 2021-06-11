//redux store brings together state, actions and reduxers
//store holds the state of our application
import { createStore, combineReducers, applyMiddleware } from 'redux';
//make use of async await inside our dispatch
import thunk from 'redux-thunk';
//to visualise our state inside our browser
import { composeWithDevTools } from 'redux-devtools-extension';
//import all the reducer created
import { createEmployeeReducer } from '../reducers/employees/createEmployeeReducer';
import { employeeListReducer } from '../reducers/employees/employeeListReducer';
import { userReducer } from '../reducers/users/userAuthReducer';
import { createLeaveReducer } from '../reducers/leaves/createLeaveReducer';
import { leaveListReducer } from '../reducers/leaves/leaveListReducer';

//pass redux think middlewares to our store to allow me to write action creators that return a function instead of an action
const middlewares = [thunk];

//we create a reducer which combines all the reducers from different parts of the app
const reducer = combineReducers({
    employeeCreated: createEmployeeReducer,
    employeesList: employeeListReducer,
    leaveCreated: createLeaveReducer,
    leavesList: leaveListReducer,
    userLogin: userReducer, 
});


//too create a store with reducer, state and composewithdevtools to allow us to apply many middlewares
//create store is a redux core library API which will create the store, every store will have the reducer, initalstate and devtols
const store = createStore(
    //reducer is the const which we defined earlier using combinereducer
    reducer,
    //include applymiddleware to apply middlewares
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  
  
  export { store };