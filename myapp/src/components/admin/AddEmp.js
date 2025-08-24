import { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmployeeService from '../../services/EmployeeService';

const AddEmp = () => {


    const [employee,setEmployee] = useState({name:'',email:'',username:'',password:'',phone:'',designation:'',role:'Employee'});
    const [errors,setErrors] = useState({});

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};
        // if (employee.name.length <4) {
        //     newErrors.name = "Name should have more than 4 characters.";
        //     isValid = false;
        // }
        // if (employee.salary <= 0) {
        //     newErrors.salary = "Salary should be greater than 0.";
        //     isValid = false;
        // }
        // if (employee.aadhaar.length !== 12) {
        //     newErrors.aadhaar = "Aadhaar should be of 12 digits.";
        //     isValid = false;
        // }
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (!emailRegex.test(employee.email)) {
        //     newErrors.email = "Not a valid email";
        //     isValid = false;
        // }
        setErrors(newErrors);
        return isValid;
    };

    const creatEmployee = (e)=>{
        e.preventDefault()
        
       if(validateForm()){
        EmployeeService.addEmployee(employee).then((resp)=>{
        toast.info('Record Created for: '+resp.name)
        setEmployee({name:'',email:'',username:'',password:'',phone:'',designation:'',role:'Employee'})
        
    }).catch((err)=>{
        toast.error('Server down, Please try again later!')
    })
}}

    const handleChange = (e)=>{
        setEmployee({...employee,[e.target.name]:e.target.value});
        setErrors({ ...errors, [e.target.name]: '' });
    }
  return (
    <>
    
        <form className="form-group" onSubmit={creatEmployee} style={{width:'30%'}}>
        <br/><input className="form-control" placeholder='Name' name='name' value={employee.name} onChange={handleChange}></input>
            {errors.name && <span>{errors.name}</span>}<br/>
            <input type='text' className="form-control" placeholder='Email' name='email' value={employee.email}  onChange={handleChange}></input>
            {errors.email && <span>{errors.email}</span>}<br/>
            <input type='text' className="form-control" placeholder='Username' name='username' value={employee.username}  onChange={handleChange}></input>
            {errors.salary && <span>{errors.aadhaar}</span>}<br/>
            <input type='number' className="form-control" placeholder='Phone' name='phone' value={employee.phone}  onChange={handleChange}></input>
            {errors.salary && <span>{errors.salary}</span>}<br/>
            <input type='password' className="form-control" placeholder='Password' name='password' value={employee.password}  onChange={handleChange}></input>
            {errors.salary && <span>{errors.salary}</span>}<br/>
            <input type='text' className="form-control" placeholder='Designation' name='designation' value={employee.designation}  onChange={handleChange}></input>
            {errors.salary && <span>{errors.salary}</span>}<br/>
            
            <button className="btn btn-primary" type='submit'>Submit</button>
        </form>
    </>
  )
}

export default AddEmp