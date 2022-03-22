import React, {useState} from 'react'
import axios from 'axios'
import CryptoJS from 'crypto-js'



function CreateUser() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = e => {
        e.preventDefault()
        const body = {
            "username": username,
            "password": encryptWithAES(password),
            "isAdmin": isAdmin
        }
       axios.post('http://localhost:5000/users/add', body).then(res => console.log(res.data))
       alert("User was added successfully")
 }

    let isAdmin = false

    const handleChangeUser = event => {
        setUsername(event.target.value)
    }
    const handleChangePass = event => {
        setPassword(event.target.value)
    }

    const changeAdminState = e => {
        isAdmin = !isAdmin
    }

 
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label>
                Username: 
            </label>
            <input
            type="text"
            required={true}
            onChange={handleChangeUser}/>
            <label>Password:</label>
             <input
            type="password"
            required={true}
            onChange={handleChangePass}/>
            <label>
                Is Admin?
                <input type="checkbox"
                onChange={(e) => changeAdminState()}
                />
            </label>
            <input type="submit"/>
        </form>
      
        </div>
    )
}

export default CreateUser

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