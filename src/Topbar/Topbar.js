import "./Topbar.css"
import { Link  } from "react-router-dom"
import { useContext } from "react"
import { AuthContext} from "../Context/AuthContext"


function Topbar() {
    const PF = "http://localhost:5000/images/"
    const {user ,dispatch } = useContext(AuthContext)

    // console.log(user);

    const handleLogout = ()=> {
        dispatch({type:"LOGOUT"})
        // router.push("/login")
    }
    return (
        <div className="topbar-main">
            <div className="top-left">
            <i className="top-left-icons fab fa-facebook-square"></i>
            <i className="top-left-icons fab fa-twitter-square"></i>
            <i className="top-left-icons fab fa-instagram"></i>
            
            </div>
            <div className="top-mid">
                <ul className="top-list">
                    <li className="list-items"><Link to="/" className="link">HOME</Link></li>
                    <li className="list-items"> <Link to="/contact" className="link">CONTACT</Link></li>
                    <li className="list-items"> <Link to="/cart" className="link">CART</Link></li>
                    <li className="list-items"> { user && <Link to="/write" className="link">WRITE</Link>}
                    </li>
                    <li className="list-items" onClick={handleLogout}> { user && <Link to="/" className="link">LOGOUT</Link>}</li>
                </ul>
            </div>
            <div className="top-right">
            { user ? (
                <Link to="/settings" >
                {user.profilepic  ?  
                <img  className="top-img"
                src={PF + user.profilepic}
                 alt="" /> :
                  <img src="" alt="profilepic" />
                }
                 </Link>
            ) : (
                <ul className="top-list">
                <li className="list-items"> <Link to="/login" className="link">LOGIN</Link></li>
                <li className="list-items"> <Link to="/register" className="link">REGISTER</Link></li>
                </ul>
            )}
            {user && <i className="top-right-icon fas fa-search"></i> }
                
                 
            </div>
        </div>
    )
}

export default Topbar
