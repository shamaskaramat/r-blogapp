import "./topbar.css";

const TopBar = () => {
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
          <li className="toplistitems">HOME</li>
          <li className="toplistitems">ABOUT</li>
          <li className="toplistitems">CONTACT</li>
          <li className="toplistitems">WRITE</li>
          <li className="toplistitems">LOGOUT</li>
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
