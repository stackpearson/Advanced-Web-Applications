import React, {useState} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';

export default function Login(props) {
    // How can we log in? What do we need to do?

 
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChanges = e => {
        setCredentials({
            ...credentials, [e.target.name]: e.target.value
            
        })
        // console.log('credentials', credentials)
        
    }

    const logUserIn = e => {
        e.preventDefault();

            axiosWithAuth()
            .post('/login', credentials)
            .then((res) => {
                console.log('resonse from login attempt', res)
                localStorage.setItem('auth-token', res.data.payload)
                props.history.push('/creatures')
            })

    }
 
    

    return (
        <div>
            <form onSubmit={logUserIn}>
                <input
                    type='text'
                    name='username'
                    placeholder='username'
                    onChange={handleChanges}
                    value={credentials.username}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={handleChanges}
                    value={credentials.password}
                />
                <button type='submit' onSubmit={logUserIn}>Log In</button>
            </form>
        </div>
    )
}