import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; 
// Postavke
const apiUrl = 'http://localhost:3000';

axios.defaults.withCredentials = true;
axios.interceptors.request.use(
    config => {
      const { origin } = new URL(config.url);
      const allowedOrigins = [apiUrl];
      const token = localStorage.getItem('token');
      if (allowedOrigins.includes(origin)) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
);

const Login =  (props) => {
    const history = useHistory();

    // Login korisnika
    const Login_Backend = async () => {
        var y = document.getElementById('email').value
        var z = document.getElementById('password').value
        const requestOptions = {
            method: 'POST',
            headers: {withCredentials: true, credentials: 'include','Content-Type': 'application/json'},
            body: JSON.stringify({
                "email": y,
                "password": z
            })
        };
        const { data } = await axios.post(`${apiUrl}/login`, requestOptions.body, {headers:requestOptions.headers});
        localStorage.setItem('token.data', data)
        console.log(data);
        if(data.user.role === 'admin'){
            history.push("/adminHome");
        }else{
            history.push("/userHome");
        }
    }

    // HTML
    return (
        <div className="login__main__container">
            <div className="login__left__side">
            <Link className="link__back__button" to="/">
                <div class="back__button">x</div>
            </Link>
                <h1>Discover a way to boost your finances</h1>
                <div className="login__cards">
                    <div className="card__logo__name">
                        <div className="logo"></div>
                        <p>Crux</p>
                    </div>
                    <div className="card__number">
                        <h4>2224</h4>
                        <h4>4324</h4>
                        <h4>5821</h4>
                        <h4>3249</h4>
                    </div>
                    <div className="card__name__validate">
                        <p>Kerim Redžepagić</p>
                        <p>08/23</p>
                    </div>
                </div>
                <div className="login__left__side__footer">
                    <h2>It's easy to control money, once you start.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Nobis consequuntur libero perferendis doloribus eum pariatur cupiditate molestiae corrupti illo placeat?</p>
                </div>
                
            </div>
            <div className="login__right__side">
                <h2>Sing Up to Crux</h2>
                <div className="first__p">
                    <p>Create an account right now in two easy steps.</p>
                </div>
                <div className="second__p">
                    <p>Fill out this short form and request a card after.</p>
                </div>
                <div className="login__parameters">
                    <input className ="n" type="text" name="name" placeholder="Username" />
                    <input className ="e" type="email" name="email" placeholder="Email"/>
                    <input className ="p" type="password" name="password" placeholder="Password"/>

                </div>
                <div className="login__terms">
                    <input className ="b" type="checkbox" name="checkbox" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti obcaecati molestias ratione doloribus quod iusto.</p>
                </div>
                <button className="login__signup__button" onClick={Login_Backend}>Sign up now</button>
                <div className="login__right__side__footer">
                    <p>Terms and conditions</p>
                    <p>Privacy</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
