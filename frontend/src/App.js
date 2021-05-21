  
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Employees from './components/Employees/Employees';
import AddEmployee from './components/Employees/AddEmployee';
import Navbar from './components/Navbar/Navbar';
import RegisterUser from './redux/reducers/users/RegisterUser';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/employees' component={Employees}  />
        <Route exact path='/addemployee' component={AddEmployee}  />
        <Route exact path='/register' component={RegisterUser}  />

      </Switch>
    </BrowserRouter>
     
    </>
  );
}

export default App;
