import React from 'react'
import "../styling/Header_Login.css"

import { Button } from "react-bootstrap"


const Header_Login = () => {
    return (
        <div className="header_login">
          
            <Button className="signup_btn" variant="outline-warning">Sign Up</Button>{' '}
        </div>
    )
}

export default Header_Login
