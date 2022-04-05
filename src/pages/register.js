import {useState} from 'react'
import axios from 'axios'
import DatePicker from "react-datepicker";
import CryptoJS from 'crypto-js'
import "react-datepicker/dist/react-datepicker.css";

const Registration = () => {
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [email, setEmail] = useState("")
    const [startDate, setStartDate] = useState(new Date())
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const handleSubmit = e => {
        e.preventDefault()
        const userData = {
            legalName: name,
            dob: startDate,
            formattedDob: startDate.toLocaleString("en-US", options)
        }
        axios.post("http://localhost:5000/users/add", {
            username: email,
            password: encryptWithAES(pass),
            userData: userData
        })
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Email:
                <input type="email"
                        onChange={e => setEmail(e.target.value)}
                        required
                        placeholder='Email'
                        />
            </label>
            <label>
                Password: 
                <input type="password"
                        onChange={e => setPass(e.target.value)}
                        required
                        placeholder='Password'
                        minLength={7}
                        />
            </label>
            <label>
                Full Name:
                <input type='text'
                        onChange={e => setName(e.target.value)}
                        required
                        placeholder='Enter Your Name'
                        />
            </label>
            <label>
                Date of Birth:
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </label>
            <input type="submit"></input>
        </form>
        </>
    )


}

export default Registration


const encryptWithAES = (ciphertext) => {
    const passphrase = '123456';
    return CryptoJS.AES.encrypt(ciphertext, passphrase).toString();
   
  };