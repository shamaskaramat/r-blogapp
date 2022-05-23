import "./topbar.css";
import { Link } from "react-router-dom";
const TopBar = () => {
  const user = true;
  return (
    <>
      <div className="top">
        <div className="topleft">
        <i className="topIcons fab fa-facebook-square"></i>
        <i className="topIcons fab fa-twitter-square"></i>
        <i className="topIcons fab fa-pinterest-square"></i>
        <i className="topIcons fab fa-instagram-square"></i>
        </div>
        <div className="topcenter">
          <ul className="toplist">
          <li className="toplistitems">
            <Link to="/" style={{textDecoration:"none", color:"inherit"}}>Home</Link>
          </li>
          <li className="toplistitems"> <Link to="/about" style={{textDecoration:"none", color:"inherit"}}>About</Link></li>
          <li className="toplistitems"> <Link to="/contact" style={{textDecoration:"none", color:"inherit"}}>Contact</Link></li>
          <li className="toplistitems"> <Link to="/write" style={{textDecoration:"none", color:"inherit"}}>Write</Link></li>
          <li className="toplistitems">{user && "LOGUT"}</li>
          </ul>
        </div>
        <div className="topright">
          <img className="topImg" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>;
    </>
  )
};

export default TopBar;
