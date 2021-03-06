import React, { useEffect, useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from '../../redux/actions/users/usersActions';
import ErrorMessage from '../ErrorMessage';


const LoginUser = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  //grab pieces of data from our store that we want

  const state = useSelector(state => {
    return state.userLogin
  })

  const { error } = state;

  const userInfo = sessionStorage.getItem('userAuthData')

  //Submithandler
  const loginUserSubmitHandler = e => {
    e.preventDefault();
    //dispatch is a redux method to allow state to be updated via an action(loginUserAction)
    dispatch(loginUserAction(email, password));


  };

  //if userinfo is true in sessionStorage, push to profile
  useEffect(() => {
    if (userInfo) history.push('/profile');
  }, [state]);


  //if its loading, display loading text, when there is error, something went wrong is displayed
  return (
    <div className='row container-height'>
      
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          {/* {loading && <h1>Loading</h1>} */}
          {error && <ErrorMessage> {error}</ErrorMessage>}
          <form onSubmit={loginUserSubmitHandler}>
            <fieldset>
              <div className='form-group'>
                <p></p>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                  required
                />
              </div>
              <button type='submit' className='btn btn-info m-auto'>
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;