import React from 'react';
import './Home.css';

import { Link } from 'react-router-dom';
const Home = () => {
       
    return (
        <div className='Container'>
             <img src='https://images.unsplash.com/photo-1618381801643-3d253a63a386?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80' alt='' /> 

            <div className='Content'>
                
                <div className='SubContent'>
                    <h1>Work Admin System (WAS)</h1>
                    <p>increase productivity with ease</p>
                    <button type='button' className='btn btn-outline-dark'>
                        <Link to='/register'>Get started</Link>
                    </button>
                </div>
            </div>
        </div>
  );
};

export default Home;