import React from 'react'
import "./BackgroundVideo.scss"
function BackgroundVideo() {
    const videoSource ="https://video.wixstatic.com/video/c837a6_92774e1a278046cf94437a8275f664a5/1080p/mp4/file.mp4"
  return (
    <div className='video__cont'>
      <video autoPlay="autoplay" className='video__main' loop="loop" >
           <source src={videoSource} type="video/mp4"  />
      </video>
    </div>
  )
}

export default BackgroundVideo
