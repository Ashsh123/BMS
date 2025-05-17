import React, { useState } from "react";
import {Link} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import "./Signin.css";
function Signin() {
  const [formData, setformdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    Address: "",
  });

  // hdere we will first create the object to display the error 

  const [errors,seterror]=useState({});

  //here we will make the function to validate the form data

  function formValidator(){
    let newErrors={};
    
    let {name,email,password,phone,Address}=formData;
    if(name.trim().length<3){
      newErrors.name="Name should be at least 3 characters long";
    }
    // code to validate the usename 
    let ValidUsername = /^[a-zA-Z][a-zA-Z0-9_]{5,19}$/;
    if(!ValidUsername.test(name)){
      newErrors.name="Enter the valid Username";
    }
   // code wrotten to validatr the email of the user
    let Validemail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!Validemail.test(email)){
      newErrors.email="Enter the valid email";
    }
   // code written to validater hte password odf user
   let Validpassword=/^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
   if(!Validpassword.test(password)){
    newErrors.password="Enter a valid Password"
   }

   // code written to validate the phone number 
   let ValidPhone=/^\d{10}$/;
   if(!ValidPhone.test(phone)){
    newErrors.phone="Enter a valid phone number";
   }

   if(Address.length<6){
    newErrors.Address="Address should be at least 6 characters long";
   }
    return newErrors;
  }

  // now we will write the change handler

const changeHandler=(e)=>{
  // first destructure
   let {name,value}=e.target;
   
   console.log(name,value);
   // now write the code snippet ot check if the name ==value
   setformdata((prev)=>({
       ...prev,
       [name]:value,
   }))
}

const submitHandler=(e)=>{
  e.preventDefault();
  // here we will call the validation fundtion
  const validateError=formValidator();
  seterror(validateError);
  if(Object.keys(validateError).length === 0){
    // here we will handle the local stiorage 
    let existing_user=JSON.parse(localStorage.getItem('user-data'))||[];
    const updated_user=[...existing_user,formData]
    localStorage.setItem('user-data',JSON.stringify(updated_user));
    toast.success("Account Created Successfully");
    setformdata({
      name: "",
      email: "",
      phone: "",
      password: "",
      Address: "",
    })
  }
}
  return (
    <div className="parent2">
      <div className="parent3">
        <form action="" id="signin-form" onSubmit={submitHandler}>
          <ToastContainer/>
          <h1>Sign In</h1>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            name="name"
            onChange={changeHandler}
          />

          {errors.name && <span className="error">{errors.name}</span>}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            name="email"
            onChange={changeHandler}
          />

         {errors.email && <span className="error">{errors.email}</span>}

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            name="password"
            onChange={changeHandler}
          />
           {errors.password && <span className="error">{errors.password}</span>}

          <label htmlFor="phone-number">Phone Number:</label>
          <input
            type="number"
            id="phone-number"
            placeholder="Enter your phone-number"
            value={formData.phone}
            name="phone"
            onChange={changeHandler}
          />
           {errors.phone && <span className="error">{errors.phone}</span>}

          <label htmlFor="Address">Address:</label>
          <input
            type="text"
            id="Address"
            placeholder="Enter your Address"
            value={formData.Address}
            name="Address"
            onChange={changeHandler}
          />

           {errors.Address && <span className="error">{errors.Address}</span>}

          <button type="submit">Signup</button>
          <div className="mt-3">
              <Link to="/login" className="link">Don't have an account? Sign up</Link>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;