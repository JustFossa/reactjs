import axios from "axios";
import React, { useState } from "react";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
function Dashboard() {
  var [username, setUsername] = useState(" ");
  var [name, setName] = useState(" ");
  var [dob, setDob] = useState(" ");
  var [pass, setPass] = useState(" ");
  var [currentPass, setCurrentPass] = useState(" ");
  var [newPass, setNewPass] = useState(" ");
  var [isAdmin, setAdmin] = useState(" ");
  var [userList, setUserList] = useState("")
  var [usedTimes, setTimes] = useState(" ")
  
  const current = Cookies.get("user");

  if (current) {
    axios.get(`http://localhost:5000/users/find/${current}`).then((res) => {
      setUsername(res.data.username);
      setName(res.data.userData["legalName"]);
      setDob(res.data.userData["formattedDob"]);
      setPass(res.data.password);
      setAdmin(res.data.isAdmin);
    });

    const changePass = (e) => {
      e.preventDefault();
      if (decryptWithAES(pass) !== currentPass) {
        alert("Invalid Password provided!");
      } else if (decryptWithAES(pass) === currentPass) {
        axios.post(`http://localhost:5000/users/update/password/${current}`, {
          password: encryptWithAES(newPass)
        });
        alert("Password has been updated");
      }
    };
    
    if(isAdmin === true) {
      const userlist = []
        axios.get("http://localhost:5000/users").then((res) => {
        userlist.push(res.data)

        console.log(userlist)
})
    }
   
   

    return (
      <>
        <div>
          <h1>
            <b>Dashboard {isAdmin ? "Admin" : ""}</b>
          </h1>
        </div>

        <h1>Username: <b>{username}</b></h1>
        <h1>Full Name: <b>{name}</b></h1>
        <h1>Date of Birthday: <b>{dob}</b></h1>
        <h1>{userList}</h1>
        <form onSubmit={changePass}>
          <label>
            Old Password:
            <input
              type="password"
              onChange={(e) => setCurrentPass(e.target.value)}
              placeholder="Current Password"
            />
          </label>
          <label>
            New Password:
            <input
              type="password"
              onChange={(e) => setNewPass(e.target.value)}
              placeholder="New Password"
            />
          </label>
          <input type="submit" />
        </form>

        <button onClick={logout}>Log Out</button>
      </>
    );
  } else {
    return (
      <>
        <h1>Not logged In</h1>
      </>
    );
  }
}

export default Dashboard;

const logout = (e) => {
  e.preventDefault();
  Cookies.remove("user");
  window.location = "/";
};
const decryptWithAES = (ciphertext) => {
  const passphrase = "123456";
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

const encryptWithAES = (text) => {
  const passphrase = "123456";
  return CryptoJS.AES.encrypt(text, passphrase).toString();
};
