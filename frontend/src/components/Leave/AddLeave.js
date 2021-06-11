import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { createLeaveAction } from '../../redux/actions/leave/leaveActions';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import leave from '../../assets/img/leave.jpg';

const AddLeave = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [dateOne, setDateOne] = useState('');
    const [dateTwo, setDateTwo] = useState('');
//for calendar
    const [value, onChange] = useState(new Date());

    //create dispatch
    const dispatch = useDispatch();

    //Handle form submit
    const handleFormSubmit = e => {
        // e.preventDefault();

        const data = {
                name, type, dateOne, dateTwo     
        };

        dispatch(createLeaveAction(data));
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
                        Click to add Leave
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
                                        Have fun on your leave!                
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
                                <img src={leave} alt="leave" width="400" height ="300"/> 

                                </div>
                                <div className='modal-body'>
                                    <form  onSubmit={handleFormSubmit} action="/leaves">
                                        <fieldset>
                                        <div className='form-group'>
                                                <input
                                                    value={name}
                                                    onChange={e => setName(e.target.value)}
                                                    type='text'
                                                    className='form-control'
                                                    id='exampleInputEmail1'
                                                    aria-describedby='emailHelp'
                                                    placeholder='Name of employee'
                                                    required
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <input
                                                    value={type}
                                                    onChange={e => setType(e.target.value)}
                                                    type='text'
                                                    className='form-control'
                                                    id='exampleInputEmail1'
                                                    aria-describedby='emailHelp'
                                                    placeholder='Type of leave'
                                                    required
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <input
                                                    value={dateOne}
                                                    onChange={e => setDateOne(e.target.value)}
                                                    type='Date'
                                                    className='form-control'
                                                    id='exampleInputPassword1'
                                                    placeholder='Start leave'
                                                    required
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <input
                                                    value={dateTwo}
                                                    onChange={e => setDateTwo(e.target.value)}
                                                    type='Date'
                                                    className='form-control'
                                                    id='exampleInputPassword1'
                                                    placeholder='End leave'
                                                    required
                                                />
                                            </div>
                                            
                                        
                                            <button type='submit' className='btn btn-warning m-auto'>
                                                Create Leave
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
            <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
        </div>
    );
};

export default AddLeave;