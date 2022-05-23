import Posts from '../Posts/Posts';
import SideBar from '../SideBar/SideBar';
import Header from '../TopBar/Header/Header';
import './Home.css';

 const Home = () => {
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <SideBar />
            </div>

        </>
    );
};
export default Home;
