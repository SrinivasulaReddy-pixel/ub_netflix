import React from 'react';
import'./LoginAndRegister.css';

export const LoginAndRegister=()=>{
    return(
        <div className="login-and-registration-page">
            <div className="login-and-registration-section">
                <div className="login-and-registration-title-section">
                    <span>Login</span> <span> | </span> <span>Register</span>
                </div>
                <div className="login-section">
                    <div>
                        <input type="text" placeholder='User Name'/>
                    </div>
                    <div>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className="checkbox-section">
                        <span className="checkbox-part">
                            <input type="checkbox"/>
                            <span>Remember me</span>

                        </span>
                        
                        <span className="checkbox-forget-password">Forgot Password?</span>
                    </div>
                    <div className="login-button">
                        <span>
                            <button>Login</button>
                        </span>
                    </div>

                </div>
            </div>
            
        </div>
    )
}