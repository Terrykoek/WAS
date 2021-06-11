import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux'
import { logoutUserAction } from '../../redux/actions/users/usersActions';


const Navbar = props => {
//need this state to define state upon userlogin
  const state = useSelector(state => 
    state.userLogin
  );

  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUserAction());
    history.push('/');
  }

  const userInfo = sessionStorage.getItem('userAuthData');

  const parseUserInfo = JSON.parse(userInfo);
  // Question mark means optional chaining 
  // operational chaining returns a value of undefned if it does not exist
  const userAdmin = parseUserInfo?.admin;


  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand' href='/'>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav m-auto'>
           
           
           {!userInfo  ? (
             <>
              <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/register'>
                  Register
                </Link>
              </li>
             </>
           ): (
           <>
            <li className='navbar-brand' >
              Dashboard
            </li>
            <li className='nav-item'>
                {/* Double exclamation mark returns a boolean value */}
                {/* Question mark means optional chaining */}
                {/* operational chaining returns a value of undefned if it does not exist*/}
                <Link className='nav-link' to='/employees'>
                  employees
                </Link>
              </li>
              <li className='nav-item'>
                {/* to access admin property if userinfo exist */}
                {/* if userAdmin is true, show add employees page, !! returns it as true*/}
                {!!userAdmin && <Link className='nav-link' to='/addemployee'>
                  Add Employees
                </Link>}
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='/profile'>
                  profile
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/leaves'>
                  View Leave
                </Link>
              </li>
              <li className='nav-item'>
              {!userAdmin && <Link className='nav-link' to='/Addleave'>
                  Apply Leave
                </Link>}
              </li>
             
              <li className='nav-item'>
                <Link onClick = {logoutHandler} className='nav-link' to='/login'>
                  Logout
                </Link>
              </li>
           </>
           )}
           <></>
            </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;