# Work Admin System (WAS)

## Table of Content
* Application Link
* Application Description
* Technologies
* Dependencies
* Wireframes and User Stories
* Further improvements

## Application Link


## Application Description
This application is an employee management app to allow managers and employees to stay connected. There are two levels of users for this app: Manager and Employee. Manager is able to create, edit and delete employee data while employee is able to send leave request for manager's viewing.


## Technologies
* MongoDB
* NodeJS
* Express
* React
* Redux
* Bootstrap
* Bcrypt
* React Hooks
* React-chartjs-2

## Wireframes and User Stories

1. Mainpage.

<a href="https://github.com/Terrykoek/WorkAdminSystem/blob/master/wireframe/MainPage.PNG" target="_blank" ><img src="https://github.com/Terrykoek/WorkAdminSystem/blob/master/wireframe/MainPage.PNG" width="100%"></a>

2. Authentication
As a user, i want to be able to register as a manager or employee. If i were a manager, i can tick manager checklist on the register page, else if i were an employee, i can register without ticking the manager checklist

<a href="https://github.com/Terrykoek/WorkAdminSystem/blob/master/wireframe/registerPage.PNG" target="_blank" ><img src="https://github.com/Terrykoek/WorkAdminSystem/blob/master/wireframe/registerPage.PNG" width="100%"></a>

3. Login
As a user, i can click on login page to login to the app based on my created email and password

<a href="https://github.com/Terrykoek/WorkAdminSystem/blob/master/wireframe/loginPage.PNG" target="_blank" ><img src="https://github.com/Terrykoek/WorkAdminSystem/blob/master/wireframe/loginPage.PNG" width="100%"></a>

4. Profile page
After login, i should be able to see some basic company data and a todolist. 

As a manager, i am able to see the following tabs in my nav bar

<a href="https://github.com/Terrykoek/WorkAdminSystem/blob/master/wireframe/profilePage.PNG" target="_blank" ><img src="https://github.com/Terrykoek/WorkAdminSystem/blob/master/wireframe/profilePage.PNG" width="100%"></a>

As an employee, i am able to see the following tabs in my nav bar

<a href="https://github.com/Terrykoek/WorkAdminSystem/blob/master/wireframe/employeePage.PNG" target="_blank" ><img src="https://github.com/Terrykoek/WorkAdminSystem/blob/master/wireframe/employeePage.PNG" width="100%"></a>

5. Create Employee
As a manager, i want to be able to create my employee info such as name, designation, years of experience and projects assigned to employee. 

<a href="https://github.com/Terrykoek/WorkAdminSystem/blob/master/wireframe/Addemployeeform.PNG" target="_blank" ><img src="https://github.com/Terrykoek/WorkAdminSystem/blob/master/wireframe/Addemployeeform.PNG" width="100%"></a>

Employee created

<a href="https://github.com/Terrykoek/WorkAdminSystem/blob/master/wireframe/employeecreatedPage.PNG" target="_blank" ><img src="https://github.com/Terrykoek/WorkAdminSystem/blob/master/wireframe/employeecreatedPage.PNG" width="100%"></a>


6. Update Employee
As a manager, i want to be able to update my employee details


<a href="https://github.com/Terrykoek/WorkAdminSystem/blob/master/wireframe/editEmployee.PNG" target="_blank" ><img src="https://github.com/Terrykoek/WorkAdminSystem/blob/master/wireframe/editEmployee.PNG" width="100%"></a>

Edit emplloyee form

<a href="https://github.com/Terrykoek/WorkAdminSystem/blob/master/wireframe/editEmployeePage.PNG" target="_blank" ><img src="https://github.com/Terrykoek/WorkAdminSystem/blob/master/wireframe/editEmployeePage.PNG" width="100%"></a>


7. View Leave
As a manager, i can also view the leaves information submitted by my staffs and reject after checking


<a href="https://github.com/Terrykoek/WorkAdminSystem/blob/master/wireframe/leavePage.PNG" target="_blank" ><img src="https://github.com/Terrykoek/WorkAdminSystem/blob/master/wireframe/leavePage.PNG" width="100%"></a>


8. Employee user
As an employee, i am able to submit leave request to my manager or his information.

9. Leave update
I can also update my leave information after reviewing with my manager.


<!-- 
As a user, i want to know what this application is about when i access the website at a glance.
<a href="https://github.com/Terrykoek/FIT-TRACK/blob/master/Mainpage.PNG" target="_blank" ><img src="https://github.com/Terrykoek/FIT-TRACK/blob/master/Mainpage.PNG" width="100%"></a>

2. Create Account page

As a user, i want to be able to register a new account.

<a href="https://github.com/Terrykoek/FIT-TRACK/blob/master/Account%20create%20page.PNG" target="_blank" ><img src="https://github.com/Terrykoek/FIT-TRACK/blob/master/Account%20create%20page.PNG" width="100%"></a>

3. Login Page

As a user, i want to be able to login to the app.

<a href="https://github.com/Terrykoek/FIT-TRACK/blob/master/login%20page.PNG" target="_blank" ><img src="https://github.com/Terrykoek/FIT-TRACK/blob/master/login%20page.PNG" width="100%"></a>

4. Home Page

Home page to inform user of log in success.

<a href="https://github.com/Terrykoek/FIT-TRACK/blob/master/Homepage.PNG" target="_blank" ><img src="https://github.com/Terrykoek/FIT-TRACK/blob/master/Homepage.PNG" width="100%"></a>

5. Index Page

Index page where all workouts are shown.

<a href="https://github.com/Terrykoek/FIT-TRACK/blob/master/Index%20page.PNG" target="_blank" ><img src="https://github.com/Terrykoek/FIT-TRACK/blob/master/Index%20page.PNG" width="100%"></a>

6. Create new workout Page

As a user, i want to be able to create new workout.

<a href="https://github.com/Terrykoek/FIT-TRACK/blob/master/Create%20new%20workout%20page.PNG" target="_blank" ><img src="https://github.com/Terrykoek/FIT-TRACK/blob/master/Create%20new%20workout%20page.PNG" width="100%"></a>

7. First entry page

As a user, i want my workout to reflect on my index page.

<a href="https://github.com/Terrykoek/FIT-TRACK/blob/master/first%20entry%20page.PNG" target="_blank" ><img src="https://github.com/Terrykoek/FIT-TRACK/blob/master/first%20entry%20page.PNG" width="100%"></a>


8. Edit workout page

As a user, i want to be able to edit my workouts.

<a href="https://github.com/Terrykoek/FIT-TRACK/blob/master/edit%20workout%20page.PNG" target="_blank" ><img src="https://github.com/Terrykoek/FIT-TRACK/blob/master/edit%20workout%20page.PNG" width="100%"></a>

9. Show editted workout page

As a user, i want my edited workout to show on my index page.
<a href="https://github.com/Terrykoek/FIT-TRACK/blob/master/Editted%20index%20page.PNG" target="_blank" ><img src="https://github.com/Terrykoek/FIT-TRACK/blob/master/Editted%20index%20page.PNG" width="100%"></a>

10. Delete workout page

As a user, i want to be able to delete my workouts.
<a href="https://github.com/Terrykoek/FIT-TRACK/blob/master/Index%20page.PNG" target="_blank" ><img src="https://github.com/Terrykoek/FIT-TRACK/blob/master/Index%20page.PNG" width="100%"></a> -->




## Further improvements
* Leave approval function by manager 
* Payroll and HR function
