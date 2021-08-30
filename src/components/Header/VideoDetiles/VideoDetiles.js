import React from 'react';
import './VideoDetiles.css';
import { useState } from 'react';
import Video from '../Video/Video';
import FakeData from '../../FakeData.json';
import { useEffect } from 'react';


const VideoDetiles = () => {
//    const [detiles,setDetils]=useState([]);
//    useEffect(() =>{
//     fetch(FakeData)
//         .then((res) => res.json())
//         .then((data) => setDetils(data[0]));  
//    },[])
  
   console.log(FakeData);
    return (
        <div className="videoShow">
             <h2>Recommended</h2>
            <div className="videoShow_videos">

           {
              FakeData.map(video =><Video video={video}/>)
          }  
          </div> 
        </div>
    );
};

export default VideoDetiles;