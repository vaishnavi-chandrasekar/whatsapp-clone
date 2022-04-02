import React, { useState } from "react";
import "./Login.css";
import image from "./images/WhatsApp.jpg";
import { auth } from "./firebase";
import { Link } from "react-router-dom";
import axios from "axios";
import { Navigate, useHistory } from 'react-router-dom';
import App from "./App";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");

  const history = useHistory()
  const handleSubmit = async (e) => {
      e.preventDefault()
      try {
          var response = await axios.post("https://cheak.herokuapp.com/register/registerUser", {
              email: email,
              password: password,
              phone: phone,
              username: username
          })
          console.log(response)


          history.push('/app')
          alert("User created successfully")


      } catch (error) {
          console.log(error)
      }

  }

  return (
    <>
      <div className="login">
        <div className="login_form">
        <form  >
        <img src={image}></img>

                    <h5>User-Name</h5>
                    <input type="text" value={username} name="username" className="username" onChange={e => setUsername(e.target.value)} required />
                    <h5>E-mail</h5>
                    <input type="text" value={email} name="email" className="email" onChange={e => setEmail(e.target.value)} required />
                    <h5>Phone</h5>
                    <input type="text" value={phone} name="phone" className="Phone" onChange={e => setPhone(e.target.value)} required />
                    <h5>Password</h5>
                    <input type="password" value={password} className="password" name="password" onChange={e => setPassword(e.target.value)} required /><br />

                   <Link to={<App/>}> <button className='btn' type='submit' onClick={handleSubmit}>Sign-Up</button></Link>

                </form>
        </div>
      </div>
    </>
  );
}

export default Login;
