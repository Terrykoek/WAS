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
    userLogin: userReducer, //login/register
});

//get user from localstorage and save in store
//if there is user in localstorage, then parse JSON userdata if not null
const userAuthFromStorage = localStorage.getItem('userAuthData')
? JSON.parse(localStorage.getItem('userAuthData')): null;


const initialState = {
    userLogin: {
        userInfo: userAuthFromStorage
    },
};

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  
  
  export { store };