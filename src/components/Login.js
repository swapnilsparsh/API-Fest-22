import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "../styling/register.css"
import signinImage from '../images/2.jpg';
import axios from 'axios';

const Login = () => {

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('')
    const[loading,setLoading]=useState(false)
    const[error,setError]=useState(false)

    const OnSubmitHandler= (e)=>{
        e.PreventDefault();
        console.log(email);

        // try{
        //     const config={
        //         headers:{
        //             "Content-type":"application/json"
        //         },
        //     };

        //     setLoading(true);

        //     const {data}=await axios.post('/posts/users/login',{
        //         email,
        //         password,
        //     },
        //     config
        //     );
        //     console.log(data);
        //     localStorage.setItem("userInfo",JSON.stringify(data))

        //     setLoading(false)
        // }catch(error){
        //     setError(error.response.data.message);

        // }
        
    }


    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                  
                    <form  onSubmit={OnSubmitHandler}>
                         
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="password">Password</label>
                                <input 
                                    name="password" 
                                    type="password"
                                    value={password}
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                    
                                />
                            </div>
                        
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="confirmPassword">Email</label>
                                <input 
                                    name="email" 
                                    type="email"
                                    value={email}
                                    placeholder="Email"
                                    onChange={(e)=>setEmail(e.target.value)}
                                    required
                                />
                            </div>
                           
                        <div className="auth__form-container_fields-content_button">
                            {/* <button 
                            >
                            {isSignup ? "Sign Up" : "Sign In"}</button> */}

                            <button>Submit</button>
                        </div>
                    </form>
                    <div className="auth__form-container_fields-account">
                        <p>
                            {/* {isSignup
                             ? "Already have an account?" 
                             : "Don't have an account?"
                             } */}
                             {/* <span onClick={switchMode}>
                             {isSignup ? 'Sign In' : 'Sign Up'}
                             </span> */}
                             <span>New customer? Register here</span>
                             <Link to="/reg"><button>Register</button></Link>
                        </p>
                    </div>
                </div> 
            </div>
            <div className="auth__form-container_image">
                <img src={signinImage} alt="sign in" />
            </div>
        </div>
    )
}

export default Login