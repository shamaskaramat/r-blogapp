import SideBar from '../SideBar/SideBar';
import './settings.css';

const Settings = () => {
    return (
        <>
            <div className='settings'>
                <div className='settingswrapper'>
                    <div className="settingsTitle">
                        <span className="updateSettingTitle">Update Your Account</span>
                        <span className="updateDeleteTitle">Delete Account</span>
                    </div>
                    <form className="settingform">
                        <label>Profile Picture</label>
                        <div className="settingspp">
                            <img className="settingsppImg" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                            <label htmlFor="fileInput">
                            <i className="settingsppIcon far fa-user-circle"></i>
                            </label>
                            <input type="file" id="fileInput" style={{display:"none"}}/>
                        </div>
                        <label>Username</label>
                        <input type="text" placeholder="shamas"/>
                        <label>Email</label>
                        <input type="email" placeholder="shamaskaramat@outlook.com"/>
                        <label>Password</label>
                        <input type="password" />
                        <button className="SettingsSubmit">Update</button>
                    </form>
                </div>
                <SideBar />

            </div>
        </>
    );
};

export default Settings;
