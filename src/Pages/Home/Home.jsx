import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css'; 
const Home = (props) => {
    return(
        <div className="Home_main">
            <div className="Buttons">
                <Link to = "/login">
                    <button className="Login_Button">Login</button>
                </Link>
                <Link to = "/registration">
                    <button className="Registration_Button">Registration</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;