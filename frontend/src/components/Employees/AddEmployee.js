import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { createEmployeeAction } from '../../redux/actions/employee/employeeActions';


const AddEmployee = () => {
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [experience, setExperience] = useState('');
    const [reporting, setReporting] = useState('');

    //create dispatch
    const dispatch = useDispatch()

    //Handle form submit
    const handleFormSubmit = e => {
        e.preventDefault();

        const data = {
            name, designation, experience, reporting
        };

        dispatch(createEmployeeAction({ name, designation, experience, reporting }));

    }
    return (
        <div className='row container-height'>
            <div className='col-lg-6 col-md-6 m-auto'>
                <div className='container'>
                    <button
                        type='button'
                        className='btn btn-primary'
                        data-toggle='modal'
                        data-target='#exampleModal'>
                        Click to add Employee.
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
                                    <h5 className='modal-Designation' id='exampleModalLabel'>
                                        Create Employee
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
                                    <h1 className='text-center'>Add Employee</h1>
                                    <form onSubmit={handleFormSubmit}>
                                        <fieldset>
                                            <div className='form-group'>
                                                <label htmlFor='exampleInputEmail1'>Name </label>
                                                <input
                                                    value={name}
                                                    onChange={e => setName(e.target.value)}
                                                    type='text'
                                                    className='form-control'
                                                    id='exampleInputEmail1'
                                                    aria-describedby='emailHelp'
                                                    placeholder='Employee name'
                                                />
                                            </div>
                                            <div className='form-group'>

                                                <label htmlFor='exampleInputEmail1'>Designation </label>
                                                <input
                                                    value={designation}
                                                    onChange={e => setDesignation(e.target.value)}
                                                    type='text'
                                                    className='form-control'
                                                    id='exampleInputEmail1'
                                                    aria-describedby='emailHelp'
                                                    placeholder='Employee Designation'
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='exampleInputPassword1'>Experience</label>
                                                <input
                                                    value={experience}
                                                    onChange={e => setExperience(e.target.value)}
                                                    type='text'
                                                    className='form-control'
                                                    id='exampleInputPassword1'
                                                    placeholder='Employee Experience'
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='exampleInputPassword1'>Reporting</label>
                                                <input
                                                    value={reporting}
                                                    onChange={e => setReporting(e.target.value)}
                                                    type='text'
                                                    className='form-control'
                                                    id='exampleInputPassword1'
                                                    placeholder='Employee Reporting'
                                                />
                                            </div>
                                            <button type='submit' className='btn btn-warning m-auto'>
                                                Create Employee
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

export default AddEmployee;