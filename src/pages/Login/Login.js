import { useContext, useRef, useState } from "react"
import "./Login.css"
import { AuthContext  } from "../../Context/AuthContext"
import { LoginCall } from "../../LoginCall"

function Login() {
    const username = useRef()
    const password = useRef()
    const [error,setError] = useState(false)
    const { user ,isFetching, dispatch } = useContext(AuthContext)
    console.log(user);
    console.log(isFetching);

    const handleClick = async (e)=> {
        e.preventDefault()
        setError(false)
        console.log(username.current.value);

        try {
          await  LoginCall  ({username:username.current.value,password:password.current.value},dispatch)
          setError(true)


        } catch (err) {
            setError(err)
        }

        }
        // 
        //   );
        // //   navigate("/")
        // // try {
        // //     const res = await axios.post("/auth/login",{username,password})
        // //     navigate("/")
        // //     console.log(res)
        // // } catch (err) {
        // //     setError(true)
        // // }
        // console.log(isFetching);
    
    return (
        <div className="login">
            <h1 className="title">Log In</h1>
                <form className="login-form" onSubmit={handleClick}>
                    <label className="login-label">User Name</label>
                    <input
                     ref={username}
                     type="text" placeholder="enter your name" />
                    <label className="login-label">Password</label>
                    <input
                    
                    ref={password}
                     type="password"/>
                    <button className="log-btn">Login</button>
                    <button className="reg-btn">Register</button>


                </form>
                 {error && <h2 style={{color:"teal", marginTop:"20px"}}>Something went wrong</h2> }
                    
        </div>
    )
}

export default Login


// LoginCall(
//        {username, password },
//           dispatch
//onChange={(e)=>setusername(e.target.value)