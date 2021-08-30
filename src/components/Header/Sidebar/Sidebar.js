import React from 'react';
import './Sidebar.css';
import home from '../../assets/img/home.png';
import explore from '../../assets/img/explore.png';
import subscription from '../../assets/img/subscription.png';
import library from '../../assets/img/library.png';
import history from '../../assets/img/history.png';
import video from '../../assets/img/your-video.png';
import watchLeater from '../../assets/img/watch-later.png';
import likeVideo from '../../assets/img/liked video.png';
import showMore from '../../assets/img/show more.png';
const Sidebar = () => {
    return (
        // <!-- sidebar -->
    <div className="side-bar">
        <a href="#" className="links active"><img src={home} alt=""/>home</a>
        <a href="#" className="links"><img src={explore} alt=""/>explore</a>
        <a href="#" className="links"><img src={subscription} alt=""/>subscription</a>
        <hr className="seperator"/>
        <a href="#" className="links"><img src={library} alt=""/>library</a>
        <a href="#" className="links"><img src={history} alt=""/>history</a>
        <a href="#" className="links"><img src={video} alt=""/>your video</a>
        <a href="#" className="links"><img src={watchLeater} alt=""/>watch leater</a>
        <a href="#" className="links"><img src={likeVideo} alt=""/>like video</a>
        <a href="#" className="links"><img src={showMore} alt=""/>show more</a>
    </div>
    );
};

export default Sidebar;