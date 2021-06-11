import './Profile.css';

import React from 'react';
import {Bar} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';

//chart

const Profile = ({ history }) => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col mt-5'>
            <div className='card m-auto ' style={{ width: '50%' }}>
              <div className='card-body'>
                <h5> Welcome </h5>
                <textarea rows="4" cols="50" name="comment" form="usrform" placeholder={'task to do for today'}>
                </textarea>
                <p className='card-text'></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
        <div className="info1">
        <h3>
          Company mission</h3>
        <p> Achieving work life balance </p>
      </div>
      <p></p>
      <p></p>
      <div>
      <Bar
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
          datasets: [
            {
              label: '# of sales per month',
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
              borderWidth: 1,
            },

          ],
        }}
        height={350}
        width={1}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 10,
            },
          },
        }}
      />
    </div>
    <div>
      <Line
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
          datasets: [
            {
              label: 'Customer Satisfaction',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
               
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
               
              ],
              borderWidth: 1,
            },

          ],
        }}
        height={350}
        width={1}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 10,
            },
          },
        }}
      />
    </div>
     

    </>
    
  );
};

export default Profile;