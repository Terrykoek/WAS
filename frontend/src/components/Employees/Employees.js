import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployeesAction, deleteEmployeesAction } from '../../redux/actions/employee/employeeActions';
import Loading from '../Loading/Loading';


const Employees = ({ history }) => {
  const dispatch = useDispatch();
//useeffect tells react to disatch action after render
//called in employees allows access to the count state variable after the effect
  useEffect(() => {
    //dispatch fetchemployeeaction which reaches my API to get the employees
    dispatch(fetchEmployeesAction());
  }, [dispatch]);

  //GRAB THE DATA FROM OUR STORE
  //useselector is a hook to return the part of the state i want
  //in this case, its the state of the employeelist from my store
  const { employees, loading } = useSelector(state => {
    return state.employeesList;
  });


  return (
    <div>
      <div className='row'>
        <div className='col'>
          <table className='table table-hover'>
            <thead>

              <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Designation</th>
                <th scope='col'>Experience</th>
                <th scope='col'>Projects assigned</th>
                <th scope='col'>Delete</th>
                <th scope='col'>Edit</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <Loading />
              ) : (
                <>
                {/* map method creates a employees data with the */}
                {/* this is a if statement, if there is employees state, map it to employee from our backend and return it onto this page */}
                  {employees &&
                    employees.map(employee => {
                      return (

                        <tr className='table-dark' key={employee._id}>
                          <th scope='row'>{employee.name}</th>
                          <td>{employee.designation}</td>
                          <td>{employee.experience}</td>
                          <td>{employee.projects}</td>

                          <td>
                            <i
                              onClick={() => dispatch(deleteEmployeesAction(employee._id))}
                              className='fas fa-trash '
                              style={{
                                color: 'red',
                                cursor: 'progress',
                              }}>
                            </i>
                          </td>
                          <td>   
                            <i  
                            //history. push() is another approach where we make use of the history props React Router provides while rendering a component.
                              className='far fa-edit'
                              onClick= {() => history.push(`/UpdateEmployee/${employee._id}`)}
                              style={{
                                color: 'yellow',
                                cursor: 'progress',
                              }}
                              >
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
     
      </div>
  );
};

export default Employees;