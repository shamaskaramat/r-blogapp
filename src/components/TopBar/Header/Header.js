import "./header.css";

const Header = () => {
  return (
      <>
       <div className="hearder">
           <div className="headerTitles">
               <span className="headerTitlesSmall">React & Node</span>
               <span className="headerTitlesLg">Blog</span>
           </div>
           <img className="headerImg" src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
           
       </div>        
      </>
  );
};

export default Header;
