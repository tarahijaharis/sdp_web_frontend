import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css'; 


async function loginUser(credentials) {
    console.log(JSON.stringify(credentials))
    return fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const Registration = (props) => {

    const [name, setUserName] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState()
    const [role, setRole] = useState()

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
            name,
            password,
            email,
            role
        });
        console.log(response)
        console.log("OK")
    }

    return (
        <div className="login-wrapper">
            <form className="texbox_reg_main" onSubmit={handleSubmit}>
                <div className="textbox_reg_submain">
                    <div className="reg_name">
                        <label htmlFor="text">Name</label>
                        <input type="text" onChange={e => setUserName(e.target.value)} />
                    </div>
                    <div className="reg_email">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="reg_pw">
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={e => setEmail(e.target.value)} />
                    </div>                  
                </div>
            </form>
            <div className="reg_buttons">
                    <button type="submit" className="submit">Submit</button>
                    <Link to="/">
                        <button className="Back">Back</button>
                    </Link>
            </div>
        </div>
    )

}

export default Registration;
