import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
    return (
        <div className="form-container">
            <div>
                <h1 className='form-title'>Login</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="Email" id="" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Passowrd</label>
                        <input type="password" name="Password" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='form-link'>
                    New to Ema-John? <Link to='/signup'>Create New Account</Link>
                </p>
                <div className="form-or">
                    <div className='gray-line'></div>
                    <div className='text-or'>Or</div>
                    <div className='gray-line'></div>
                </div>
                <input className='google-signup' type="submit" value="Continue With Google" />
            </div>
        </div>
    );
};

export default Login;