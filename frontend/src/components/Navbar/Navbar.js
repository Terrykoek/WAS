import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand' to='/'>
          Welcome Manager 
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
            <li className='nav-item active'>
              <a className='nav-link' to='/'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              {/* Modal  */}
              {/*data target means if i want it to be in about, have to have id of about */}
              <button
                type='button'
                className='btn btn-danger'
                data-toggle='modal'
                data-target='#about'>
                About
              </button>

              <div
                className='modal fade'
                id='about'
                tabIndex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'>
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h5 className='modal-title' id='exampleModalLabel'>
                        App functionalities
                      </h5>
                      <button
                        type='button'
                        className='close'
                        data-dismiss='modal'
                        aria-label='Close'>
                        <span aria-hidden='true'>&times;</span>
                      </button>
                    </div>
                    <div className='modal-body'>
                      <ul className='list-group'>
                        <li className='list-group-item active'>
                          <i
                            className='fas fa-clipboard-list text-white mr-3'
                            style={{ fontSize: '1.5rem' }}></i>
                          Register User
                          <hr />
                        </li>
                        <li className='list-group-item'>
                          <i
                            className='fas fa-clipboard-list text-white mr-3'
                            style={{ fontSize: '1.5rem' }}></i>
                          Update Profile
                          <hr />
                        </li>

                        <li className='list-group-item'>
                          <i
                            className='fas fa-clipboard-list text-white mr-3'
                            style={{ fontSize: '1.5rem' }}></i>
                          Login
                          <hr />
                        </li>
                        <li className='list-group-item'>
                          <i
                            className='fas fa-clipboard-list text-white mr-3'
                            style={{ fontSize: '1.5rem' }}></i>
                          User Dashboard
                          <hr />
                        </li>
                        <li className='list-group-item'>
                          <i
                            className='fas fa-clipboard-list text-white mr-3'
                            style={{ fontSize: '1.5rem' }}></i>
                          List of Users
                          <hr />
                        </li>
                        <li className='list-group-item'>
                          <i
                            className='fas fa-clipboard-list text-white mr-3'
                            style={{ fontSize: '1.5rem' }}></i>
                          List of employees
                          <hr />
                        </li>
                        <li className='list-group-item'>
                          <i
                            className='fas fa-clipboard-list text-white mr-3'
                            style={{ fontSize: '1.5rem' }}></i>
                          Many more
                          <hr />
                        </li>
                      </ul>
                    </div>
                    <div className='modal-footer'>
                     
                      <button
                        type='button'
                        className='btn btn-danger'
                        data-dismiss='modal'>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* List menu items */}
            <>
              <li className='nav-item'>
                <Link className='nav-link' to='/employees'>
                  employees
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/addemployee'>
                  Add Employees
                </Link>
              </li>

              <li className='nav-item'>
                <a className='nav-link' to='/users'>
                  Users
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' to='/login'>
                  Logout
                </a>
              </li>
            </>
            {/* Login Register */}
            <>
              <li className='nav-item'>
                <a className='nav-link' to='/login'>
                  Login
                </a>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/register'>
                  Register
                </Link>
              </li>
            </>

            {/* Drop dowm */}
            {true ? (
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle btn-dark'
                  data-toggle='dropdown'
                  href='/'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'></a>
                <div className='dropdown-menu'>
                  <a className='dropdown-item' to='/profile'>
                    Profile
                  </a>
                  <a className='dropdown-item' to='/addemployee'>
                    Add employee
                  </a>
                  <a className='dropdown-item' to='/employees'>
                    employees
                  </a>

                  <div className='dropdown-divider'></div>
                  <button className='dropdown-item'>Logout</button>
                </div>
              </li>
            ) : (
              ''
            )}
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2'
              type='text'
              placeholder='Search'
            />
            <button className='btn btn-secondary my-2 my-sm-0' type='submit'>
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;