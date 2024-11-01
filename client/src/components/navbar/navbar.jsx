import { useState, useContext } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Navbar() {
    const [open,setOpen] = useState(false)
    const { currentUser } = useContext(AuthContext);
    const fetch = useNotificationStore((state) => state.fetch);
    const number = useNotificationStore((state) => state.number);

    if(currentUser) fetch();

    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="logo" />
                    <span>RealHome</span>
                </a>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact Us</a>
                <a href="/agents">Agents</a>
            </div>
            <div className="right">
                {currentUser ? (<div className="user">
                    <img src={currentUser.avatar || '/noavatar.jpg'} alt="user" />
                    <span>{currentUser.username}</span>
                    <Link to='/profile' className="profile">
                        {number > 0 && <div className="notification">{number}</div>}
                        <span>Profile</span>
                    </Link>
                </div>) : (
                    <>
                        <a href="/login">Sign In</a>
                        <a href="/register" className="register">Sign Up</a>
                    </>
                )}
                <div className="menuIcon">
                    <img src="/menu.png" alt="menuIcon" onClick={() => setOpen((prev) => !prev)}/>
                </div>
                <div className={open ? 'menu active' : 'menu'}>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact Us</a>
                    <a href="/agents">Agents</a>
                    {currentUser? (<a href="/profile">Profile</a>):(
                        <> 
                            <a href="/login">Sign In</a>
                            <a href="/register">Sign Up</a>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;