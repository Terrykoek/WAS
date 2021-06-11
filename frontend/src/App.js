import './App.css';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import Employees from './components/Employees/Employees';
import AddEmployee from './components/Employees/AddEmployee';
import Leaves from './components/Leave/Leaves';
import AddLeave from './components/Leave/AddLeave';
import Navbar from './components/Navbar/Navbar';
import RegisterUser from './components/users/RegisterUser';
import LoginUser from './components/users/LoginUser';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import EmployeeDetail from './components/Employees/UpdateEmployee';
import UpdateEmployee from './components/Employees/UpdateEmployee';
import ProtectedRoute from './util/ProtectedRoute';
import React from 'react';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}  />
        <Route exact path='/login' component={LoginUser}  />
        <ProtectedRoute exact path='/profile' component={Profile} />
        <Route exact path='/UpdateEmployee/:id' component={UpdateEmployee} />
        <ProtectedRoute exact path='/employees' component={Employees}  />
        <ProtectedRoute exact path='/addemployee' component={AddEmployee}  />
        <ProtectedRoute exact path='/leaves' component={Leaves}  />
        <ProtectedRoute exact path='/addleave' component={AddLeave}  />
        <Route exact path='/register' component={RegisterUser}  />
        <ProtectedRoute exact path='/employeedetail' component={EmployeeDetail} />
      </Switch>
    </BrowserRouter>
     
    </>
  );
}


export default App;