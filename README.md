# Work Admin System (WAS)

## Table of Content
* Application Link
* Application Description
* Technologies
* Wireframes and User Stories
* Further improvements

## Application Link

https://workadminsystem.herokuapp.com/

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
* React-router-dom
* React-calendar
* React Hooks
* React-chartjs-2

## Wireframes and User Stories

1. Mainpage.

<a href="https://github.com/Terrykoek/WAS/blob/master/wireframe/MainPage.PNG" target="_blank" ><img src="https://github.com/Terrykoek/WAS/blob/master/wireframe/MainPage.PNG" width="100%"></a>

2. Authentication.

As a user, i want to be able to register as a manager or employee. If i were a manager, i can tick manager checklist on the register page, else if i were an employee, i can register without ticking the manager checklist

<a href="https://github.com/Terrykoek/WAS/blob/master/wireframe/registerPage.PNG" target="_blank" ><img src="https://github.com/Terrykoek/WAS/blob/master/wireframe/registerPage.PNG" width="100%"></a>

3. Login.

As a user, i can click on login page to login to the app based on my created email and password

<a href="https://github.com/Terrykoek/WAS/blob/master/wireframe/loginPage.PNG" target="_blank" ><img src="https://github.com/Terrykoek/WAS/blob/master/wireframe/loginPage.PNG" width="100%" height="50%"></a>

4. Profile page.

After login, i should be able to see some basic company data and a todolist. 

As a manager, i am able to see the following tabs in my nav bar. Manager is able to add employee.

<a href="https://github.com/Terrykoek/WAS/blob/master/wireframe/profilePage.PNG" target="_blank" ><img src="https://github.com/Terrykoek/WAS/blob/master/wireframe/profilePage.PNG" width="100%"></a>

As an employee, i am able to see the following tabs in my nav bar. Employee is not able to add employee information.

<a href="https://github.com/Terrykoek/WAS/blob/master/wireframe/employeePage.PNG" target="_blank" ><img src="https://github.com/Terrykoek/WAS/blob/master/wireframe/employeePage.PNG" width="100%"></a>

5. Create Employee

As a manager, i want to be able to create my employee info such as name, designation, years of experience and projects assigned to employee. 

<a href="https://github.com/Terrykoek/WAS/blob/master/wireframe/Addemployeeform.PNG" target="_blank" ><img src="https://github.com/Terrykoek/WAS/blob/master/wireframe/Addemployeeform.PNG" width="100%"></a>

Employee created

<a href="https://github.com/Terrykoek/WAS/blob/master/wireframe/employeecreatedPage.PNG" target="_blank" ><img src="https://github.com/Terrykoek/WAS/blob/master/wireframe/employeecreatedPage.PNG" width="100%"></a>


6. Update Employee

As a manager, i want to be able to update my employee details


<a href="https://github.com/Terrykoek/WAS/blob/master/wireframe/editEmployee.PNG" target="_blank" ><img src="https://github.com/Terrykoek/WAS/blob/master/wireframe/editEmployee.PNG" width="100%"></a>

Edit emplloyee form

<a href="https://github.com/Terrykoek/WAS/blob/master/wireframe/editEmployeePage.PNG" target="_blank" ><img src="https://github.com/Terrykoek/WAS/blob/master/wireframe/editEmployeePage.PNG" width="100%"></a>


7. View Leave

As a manager, i can also view the leaves information submitted by my staffs and reject after checking


<a href="https://github.com/Terrykoek/WAS/blob/master/wireframe/leavePage.PNG" target="_blank" ><img src="https://github.com/Terrykoek/WAS/blob/master/wireframe/leavePage.PNG" width="100%"></a>


8. Employee user

As an employee, i am able to submit leave request to my manager or his information.

<a href="https://github.com/Terrykoek/WAS/blob/master/wireframe/applyLeave.PNG" target="_blank" ><img src="https://github.com/Terrykoek/WAS/blob/master/wireframe/applyLeave.PNG" width="100%"></a>



9. Leave update

I can also update my leave information after reviewing with my manager.

Employee Leave update form

<a href="https://github.com/Terrykoek/WAS/blob/master/wireframe/editEmployeePage.PNG" target="_blank" ><img src="https://github.com/Terrykoek/WAS/blob/master/wireframe/editEmployeePage.PNG" width="100%"></a>



10. Logout

Logging out will bring me back to the homepage


## Further improvements
* Leave approval function by manager 
* Payroll and HR function
