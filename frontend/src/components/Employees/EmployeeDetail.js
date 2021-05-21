import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployee, updateEmployee } from '../../redux/actions/employees/employeeActions';

const EmployeeDetail = ({ history }) => {
  const { id } = useParams();

  //Get the Employee details and fill it in the form
  const employeeDetails = useSelector(state => state.emplloyeeDetails);

  const { employee, loading } = employeeDetails;

  const [category, setCategory] = useState(employee && !loading && employee.category);
  const [title, setTitle] = useState(employee && !loading && employee.title);
  const [author, setAuthor] = useState(employee && employee.author);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployee(id));
  }, [dispatch, id]);

  //dispatch action

  const formSubmitHandler = e => {
    const data = {
      category,
      title,
      author,
    };
    e.preventDefault();
    dispatch(updateEmployee(id, data));
    history.push('/employees');
  };
  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          {employee ? (
            <>
              <h1 className='text-center'>Update</h1>
              <form onSubmit={formSubmitHandler}>
                <fieldset>
                  <div className='form-group'>
                    <select
                      value={category}
                      onChange={e => setCategory(e.target.value)}
                      className='custom-select'>
                      <option defaultValue='programming'>programming</option>
                      <option value='religion'>Religion</option>
                      <option value='life'>life</option>
                      <option value='culture'>culture</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Author </label>
                    <input
                      value={author}
                      onChange={e => setAuthor(e.target.value)}
                      type='text'
                      className='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      placeholder='Author name'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputPassword1'>title</label>
                    <input
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                      type='text'
                      className='form-control'
                      id='exampleInputPassword1'
                      placeholder='Employee title'
                    />
                  </div>
                  <button type='submit' className='btn btn-dark m-auto'>
                    Create Employee
                  </button>
                </fieldset>
              </form>
            </>
          ) : (
            'No'
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;