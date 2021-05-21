import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEmployeeReducer } from '../reducers/employees/createEmployeeReducer';
import { employeeListReducer } from '../reducers/employees/employeeListReducer';
import { userReducer } from '../reducers/users/userAuthReducer';


const middlewares = [thunk];


const reducer = combineReducers({
    employeeCreated: createEmployeeReducer,
    employeesList: employeeListReducer,
    userLogin: userReducer,
});


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  
  
  export { store };