import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch  } from 'react-redux';
import { updateEmployeesAction } from '../../redux/actions/employee/employeeActions';

const UpdateEmployee = ({ history }) => {
  
//useState is used as the states are only used for this component
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [experience, setExperience] = useState('');
  const [projects, setProjects] = useState('');

  const dispatch = useDispatch();

  let {id} = useParams();
// Need to pass this id into iupdateemployeeaction
  const formSubmitHandler = e => {
    // e.preventDefault();

    const data = {
      name,
      designation,
      experience,
      projects,
    };

    //dispatch updateemployeesaction by pass through id and data
    dispatch(updateEmployeesAction( id, data ));
    //push it to employees page
    history.push('/employees');
    window.location.reload();
  };


  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          <button
            type='button'
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#exampleModal'>
            Edit this employee
          </button>

          <div
            className='modal fade'
            id='exampleModal'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Make sure employee data is confidential
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
                  <form onSubmit={formSubmitHandler} >
                    <fieldset>
                      <div className='form-group'>
                        <input
                          value={name}
                          onChange={e => setName(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          placeholder='Employee name'
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <input
                          value={designation}
                          onChange={e => setDesignation(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='Employee Designation'
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <input
                          value={experience}
                          onChange={e => setExperience(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='Employee Experience'
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <input
                          value={projects}
                          onChange={e => setProjects(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='Projects assigned'
                          required
                        />
                      </div>                   
                      <button type='submit' className='btn btn-dark m-auto'>
                        Update Employee
                  </button>
                    </fieldset>
                  </form>
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
        </div>
      </div>
      </div>
  );
};

export default UpdateEmployee;