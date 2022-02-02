import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "../styling/register.css"
import signinImage from '../images/2.jpg';

const Register = () => {

    const[email,setEmail]=useState('');

    const [confirmpassword,setConfirmPassword]=useState('')

    const[message,setMessage]=useState(null)

    const[name,setName]=useState('')

    const[error,setError]=useState(false)

    const[password,setPassword]=useState('')

    // const value='';

    const OnSubmitHandler=(e)=>{
        console.log(email)
        e.PreventDefault();
       

    }
    // const handleInputName=(e)=>{
    //     console.log(name);
    //     // name=e.target.value;
    //     // value=e.target.value;
    
        

    // }

    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                  
                    <form  method="get" onSubmit={OnSubmitHandler}>
                         
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="fullName">Full Name</label>
                                <input 
                                    name="fullName" 
                                    type="text"
                                    placeholder="Full Name"
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                    
                                />
                            </div>
                        
                        
                       
                             <div className="auth__form-container_fields-content_input">
                                <label htmlFor="phoneNumber">Email</label>
                                <input 
                                    name="email" 
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div> 
                        
                    
                        <div className="auth__form-container_fields-content_input">
                                <label htmlFor="password">Password</label>
                                <input 
                                    name="password" 
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                        
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input 
                                    name="confirmpassword" 
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmpassword}
                                    onChange={(e)=>setConfirmPassword(e.target.value)}
                            /></div>
                           
                        <div className="auth__form-container_fields-content_button">
                           
                            <button >Submit</button>
                        </div>
                    </form>
                    <div className="auth__form-container_fields-account">
                        <p>
                             <span>Already a customer? Sign In here</span>
                             <Link to="/login"><button>Sign In</button></Link>
                        </p>
                    </div>
                </div> 
            </div>
            <div className="auth__form-container_image">
                <img src={signinImage} alt="sign in" />
            </div>
        </div>
    );
};

export default Register