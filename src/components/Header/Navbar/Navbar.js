import React from 'react';
import Logo from '../../assets/img/logo.png';
import Search from '../../assets/img/search.png';
import video from '../../assets/img/video.png';
import grid from '../../assets/img/grid.png';
import bell from '../../assets/img/bell.png';
import profile from '../../assets/img/profile-pic.png';
import Sidebar from '../Sidebar/Sidebar';
import './Navbar.css';
import Filters from '../Filters/Filters';
import Video from '../Video/Video';
import VideoDetiles from '../VideoDetiles/VideoDetiles';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
    <div className="toggle-btn">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <img src={Logo} className="logo" alt=""/>
    <div className="search-box">
        <input type="text" className="search-bar" placeholder="search"/>
        <button className="search-btn"><img src={Search} alt=""/></button>
    </div>
    <div className="user-options">
        <img src={video} className="icon" alt=""/>
        <img src={grid} className="icon" alt=""/>
        <img src={bell} className="icon" alt=""/>
        
        <div className="user-dp">
            <img src={profile} alt=""/>
        </div>
    </div>
</nav>
<Sidebar></Sidebar>
<Filters></Filters>
{/* <Video></Video> */}
<VideoDetiles></VideoDetiles>
    </div>
  );
};

export default Navbar;
 


 
  