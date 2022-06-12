import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Sidebar.css"

function Sidebar() {

    const [cat,setCat] = useState([])

    useEffect(()=> {
        const fetchCategory =async ()=> {
            const res = await axios.get("/category")
            setCat(res.data[0])
        }
        fetchCategory()
    },[])


    return (
        <div className="sidebar">
            <div className="sidebar-text">
                <span className="sidebar-title">ABOUT ME</span>
                <img className="sidebar-img"
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <p className="title-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-category">Categories</span>
                <ul className="sidbar-list">
                  <Link to={`/?cat=${cat.categoryName}`}>  <li className="sidebar-items">{cat.categoryName}</li>
                    </Link> 
                    {/* <li className="sidebar-items">Music</li>
                    <li className="sidebar-items">Cinema</li>
                    <li className="sidebar-items">Sports</li>
                    <li className="sidebar-items">Tech</li>
                    <li className="sidebar-items">Adventure</li> */}
                </ul>
            </div>
            <div className="sidebar-social">
                <span className="social-title">Follow me</span>
                <div className="social-icons">
                <i className="list-icons fab fa-facebook-square"></i>
                <i className="list-icons fab fa-twitter-square"></i>
                <i className="list-icons fab fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
