import Login from "./components/Login/Login";
import Settings from "./components/Settings/Settings";
import Single from "./components/Single/Single";
import Write from "./components/Write/Write";
import Register from './components/Register/Register'
import Home from "./components/Home/Home";
import TopBar from "./TopBar/TopBar";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  const user = false;
  return (
    <BrowserRouter>
    <TopBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={user ? <Home/>:<Register/>}/>
      <Route path="/login" element={user ? <Home/>:<Login/>}/>
      <Route path="/post/:postId" element={<Single/>}/>
      <Route path="Write" element={user ? <Write/>:<Register/>}/>
      <Route path="settings" element={user ? <Settings/>:<Register/>}/>
      </Routes>
    </BrowserRouter>

  )
};

export default App;