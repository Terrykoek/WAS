  
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Employees from './components/Employees/Employees';
import AddEmployee from './components/Employees/AddEmployee';
import Navbar from './components/Navbar/Navbar';
import RegisterUser from './components/users/RegisterUser';
import LoginUser from './components/users/LoginUser';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/login' component={LoginUser}  />
        <Route exact path='/employees' component={Employees}  />
        <Route exact path='/addemployee' component={AddEmployee}  />
        <Route exact path='/register' component={RegisterUser}  />

      </Switch>
    </BrowserRouter>
     
    </>
  );
}

export default App;
