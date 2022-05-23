import './sidebar.css';

const SideBar = () => {
    return (
        <>
            <div className='sidebar'>
                <div className='sidebarItem'>
                    <span className="sidebarTitle">ABOUT ME</span>
                    <img src="https://scontent.flhe2-3.fna.fbcdn.net/v/t31.18172-8/28616539_130542604440629_2395263754336423465_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE79BpExRIg-4oZBH0lPKab2Sh-7--nDJ_ZKH7v76cMn1jI5DJhEt8I-ztCTfb3pQlXnV_qjZ9aS6Q2oN2zg51j&_nc_ohc=epFUf3X4OkoAX_J_g_X&_nc_ht=scontent.flhe2-3.fna&oh=00_AT-DLNU3JL5i1rSiOZ4WNQ_bPBGrhyLFN0gb6-oezD1kzw&oe=62AF93DA" alt=''/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className='sidebarItem'>
                    <span className="sidebarTitle">CATAGORIES</span>
                    <ul className="sidebarList">
                        <li className="sidebarListItems">Life</li>
                        <li className="sidebarListItems">Music</li>
                        <li className="sidebarListItems">Style</li>
                        <li className="sidebarListItems">Sports</li>
                        <li className="sidebarListItems">Tech</li>
                        <li className="sidebarListItems">Cinema</li>
                    </ul>
                </div>
                <div className='sidebarItem'>
                    <span className="sidebarTitle">Follow Us</span>
                    <div className="sidebarSocial">
                        <i className="sidebarIcons fab fa-facebook-square"></i>
                        <i className="sidebarIcons fab fa-twitter-square"></i>
                        <i className="sidebarIcons fab fa-pinterest-square"></i>
                        <i className="sidebarIcons fab fa-instagram-square"></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;
