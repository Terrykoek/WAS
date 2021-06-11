import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeavesAction, deleteLeavesAction } from '../../redux/actions/leave/leaveActions';
import Loading from '../Loading/Loading';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../Profile/Profile.css';


const Leaves = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch action
    dispatch(fetchLeavesAction());
  }, [dispatch]);

  //GRAB THE DATA FROM OUR STORE
  const { leaves, loading } = useSelector(state => {
    return state.leavesList;
  });
//for calendar
  const [value, onChange] = useState(new Date());


  return (
    <div>
      <div className='row'>
        <div className='col'>
          <table className='table table-hover'>
            <thead>

              <tr>
              <th scope='col'>Name of employee</th>
                <th scope='col'>Type of leave</th>
                <th scope='col'>Start Date</th>
                <th scope='col'>End Date</th>
                <th scope='col'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <Loading />
              ) : (
                <>
                  {leaves &&
                    leaves.map(leave => {
                      return (

                        <tr className='table-dark' key={leave._id}>
                          <th scope='row'>{leave.name}</th>
                          <td>{leave.type}</td>
                          <td>{leave.dateOne}</td>
                          <td>{leave.dateTwo}</td>
                          <td>
                               <i
                              onClick={() => dispatch(deleteLeavesAction(leave._id))}
                              className='fas fa-trash '
                              style={{
                                color: 'red',
                                cursor: 'progress',
                              }}>
                            </i> 
                          </td>
                        </tr>
                      );
                    })}
                </>
              )}
            </tbody>
          </table>
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

export default Leaves;