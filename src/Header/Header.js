import "./Header.css"
import wallpaper from "../images/wall.jpg"

function Header() {
    return (
        <div className="header">
            <div className="header-text">
                <span className="text-sm">Web Devs</span>
                <span className="text-lg"> Explorer </span>
            </div>
            {/* <img className="header-img"
            src={wallpaper}
            alt="" /> */}
        </div>
    )
}

export default Header

//https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500