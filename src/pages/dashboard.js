
import axios from 'axios';
import React, {useState} from 'react'
import Cookies from 'js-cookie'

function Dashboard() {
    var [username, setUsername] = useState(" ")
    var [id, setId] = useState(" ")
    const current = Cookies.get("user")
    
    if(current) {
    
       axios.get(`http://localhost:5000/users/find/${current}`)
            .then(res => {
                setUsername(res.data.username)
                setId(res.data._id)
})


       
        return (
            <>
            <div class="jumbotron text-center">
                 <h1><b>Dashboard</b></h1>
            </div>
               
                <h1>Username: {username}</h1>
                <h1>ID: {id}</h1> 
                <button onClick={logout}>Log Out</button>     
            </>
            )

       
    } else {
        return <>
            <h1>Not logged In</h1>
        </>
    }
        
    }
    
  




export default Dashboard;

const logout = e => {
    e.preventDefault()
    Cookies.remove("user")
    window.location = "/"
}