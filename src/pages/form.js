import { useState } from "react";
import React from "react"
import ReactDOM from "react-dom"

function MyForm() {
    const [name, setName] = useState("Please enter your name ")
    
    
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Your name is: ${name}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter Your Name  
                <input
                    type="text"
                    name="username"
                    placeholder={name}
                    required={true}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <input type="submit"/>
        </form>
    )
}

export default MyForm