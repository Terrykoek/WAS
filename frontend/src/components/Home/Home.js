import React from 'react';
import './Home.css';
import photob from '../../assets/img/photob.jpg';

import { Link } from 'react-router-dom';
const Home = () => {
       
    return (
        <div className='Container'>
            <img src={photob} alt='photob' width="2000" height ="840"/> 
            <div className='Content'>
                <div className='SubContent'>
                    <h1>Work Admin System (WAS)</h1>
                    <p>Increase productivity with ease</p>
                    <button type='button' className='btn btn-outline-dark'>
                        <Link to='/register'>Get started</Link>
                    </button>
                </div>
            </div>
        </div>
  );
};

export default Home;