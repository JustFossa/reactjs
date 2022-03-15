import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {Link, Outlet} from 'react-router-dom'
import CryptoJS from 'crypto-js'
import axios from 'axios'
import Cookies from 'js-cookie'

function Login() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")


    const checkExist = e => {
        e.preventDefault()
        axios.get(`http://localhost:5000/users/find/${user}`)
            .then(res => {
                if (res.data !== null) {
                    if(password === decryptWithAES(res.data["password"])) {
                       alert("Correct")
                       Cookies.set("user", user)
                       window.location = "/dashboard"
                    } else {
                        alert("Invalid password")
                    }
                } else alert("Invalid Username")
            })
     

    }

    

    return (
        <div id="form">
        
        <form onSubmit={checkExist}>
            <label>
                Username: 
            </label> 
            <input 
                type="text"
                placeholder='Username'
                onChange={(e) => setUser(e.target.value)}
            />
            <label>
                Password:
            </label>
            <input 
                type="password"
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit"/>
        </form>

        </div>
    )
    
}



export default Login

const encryptWithAES = (text) => {
    const passphrase = '@07!Rusnacok*7';
    return CryptoJS.AES.encrypt(text, passphrase).toString();
  };
  
  const decryptWithAES = (ciphertext) => {
    const passphrase = '@07!Rusnacok*7';
    const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  };