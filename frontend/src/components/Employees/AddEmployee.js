import React, { useState, } from 'react';
import {useDispatch} from 'react-redux';
import { createEmployeeAction } from '../../redux/actions/employee/employeeActions';
import avatar from '../../assets/img/avatar.jpg';
import {Pie} from 'react-chartjs-2';
import '../Profile/Profile.css';

const AddEmployee = () => {
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [experience, setExperience] = useState('');
    const [projects, setProjects] = useState('');

    //create dispatch function which is used to dispatch actions from the store
    const dispatch = useDispatch();

    //create submit form 
    const handleFormSubmit = e => {
        // e.preventDefault();
        //pass in data from the employee model
        const data = {
            name, designation, experience, projects
        };
        //dispatch createmployeeaction with the data
        dispatch(createEmployeeAction(data));
    };

   
    //bootstrap modal form template
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
                                    <h5 className='modal-title' id='exampleModalLabel'>
                                        Add employee                        
                                    </h5>
                                    <button
                                        type='button'
                                        className='close'
                                        data-dismiss='modal'
                                        aria-label='Close'>
                                        <span aria-hidden='true'>&times;</span>
                                    </button>
                                </div>
                                <div>
                                <img src={avatar} alt="employee face" width="400" height ="300"/> 
                                </div>
                                <div className='modal-body'>
                                    <form onSubmit={handleFormSubmit} action="/employees">
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
            <p>Overview of employees per division</p>
            <div>
                <Pie
                    data={{
                        labels: ['Hardware', 'Software', 'Finance', 'Projects', 'IT', 'Development'],
                        datasets: [
                            {
                                data: [12, 19, 3, 5, 2, 3],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',

                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)',

                                ],
                            },

                        ],
                    }}
                    height={350}
                    options={{
                        maintainAspectRatio: false,
                       
                        legend: {
                            labels: {
                                fontSize: 10,
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default AddEmployee;