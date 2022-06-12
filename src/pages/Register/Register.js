import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"
import Footer from "../Footer/Footer";
import "./Register.css";

function Register() {
    const [username,setusername] = useState("")
    const[email,setEmail] =useState("")
    const[password,setpassword] = useState("")
    const[passwordAgain,setpasswordAgain] = useState("")
    const [error,setError] = useState(false)
    const navigate = useNavigate()


    const handleClick = async (e)=> {
        e.preventDefault()
        setError(false)
        if (passwordAgain !== password) {
            toast.error("passwords doesn't match!")
        } else {
            try {
                const res = await axios.post("/auth/register",{username,email,password})
                navigate("/login")
                 console.log(res);
            } catch (err) {
                setError(true)
            }
        }
        
        
        
    }
    return (
        <>
        <div className="register">
            <h1 className="reg-title">Register</h1>
                <form className="reg-login-form" onSubmit={handleClick}>
                    <label className="reg-login-label">Username</label>
                    <input 
                    value={username} 
                    onChange={(e)=>setusername(e.target.value)} 
                    type="reg-text" placeholder="enter your name" required />
                    <label className="reg-login-label">Email</label>
                    <input 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                     type="reg-text"
                      placeholder="enter your name" required />
                    <label className="reg-login-label">Password</label>
                    <input
                    value={password}
                    onChange={(e)=>setpassword(e.target.value)}
                     type="password"/>
                     <label className="reg-login-label">confirm Password</label>
                    <input
                    value={passwordAgain}
                    onChange={(e)=>setpasswordAgain(e.target.value)}
                     type="password"/>
                    <button  className="reg-btn">Register</button>
                    


                </form> 
                {/* <button className="reg-log-btn">Log In</button> */}
                {error && <h2 style={{color:"teal", marginTop:"20px"}}>Something went wrong</h2> }
        </div>
        <Footer/>

        </>
    )
}

export default Register
