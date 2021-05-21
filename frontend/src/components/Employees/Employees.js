import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchEmployeesAction } from '../../redux/actions/employees/employeeActions';
// import Loading from '../Loading/Loading';

const Employees = () => {
    return (
      <div>
        <div className='row'>
          <div className='col'>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th scope='col'>Name</th>
                  <th scope='col'>Designation</th>
                  <th scope='col'>Delete</th>
                  <th scope='col'>Edit</th>
                </tr>
              </thead>
              <tbody>
                {/* Map through here */}
                <tr className='table-dark'>
                  <th scope='row'>title</th>
                  <td>author</td>
                  <td>
                    <i
                      className='fas fa-trash '
                      style={{ color: 'red', cursor: 'progress' }}></i>
                  </td>
                  <td>
                    <i
                      className='far fa-edit'
                      style={{
                        color: 'yellow',
                        cursor: 'progress',
                      }}></i>
                  </td>
                </tr>
                {/* End of map through */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default Employees;