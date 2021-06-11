import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUserAction } from '../../redux/actions/users/usersActions';

const RegisterUser = ({history}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [admin, setAdmin] = useState(false);

  const dispatch = useDispatch();

  const formSubmitHandler = e => {
    e.preventDefault();
    //dispatch action here
    dispatch(registerUserAction(name, email, password, admin));
    alert('User successfully created');
  };
  return (

    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>

          <h1>Welcome aboard</h1>
          <form onSubmit={formSubmitHandler}>
            <fieldset>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Name</label>
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  type='text'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter Name'
                  required

                />
              </div>
              <div className='form-group'>
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
                  onChange={e => setpassword(e.target.value)}
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                  required
                />
              </div>
              <p></p>
              <div className='form-group'>
              <label htmlFor='exampleInputPassword1'> Manager </label>
                <input
                type="checkbox"
                onChange={e => setAdmin(!admin)}
                />
              </div>
              <p></p>
              <button type='submit' className='btn btn-info m-auto'>
                Register
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;