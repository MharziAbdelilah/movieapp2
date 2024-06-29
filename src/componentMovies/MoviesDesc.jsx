import React from 'react'
import './MoviesStyle.css'
import BackButton from './BackPrevious'


function MoviesDesc() {
  return (

<div className="container hero-section mt-5">
    <div className="row">
      {/* Left Section */}
      <div className="col-md-6">
        <video className="hero-video" controls>
          <source src="path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h2 className="hero-title mt-3">Your Title Here</h2>
      </div>
      {/* Right Section */}
      <div className="col-md-6 d-flex align-items-star">
        <p className="hero-paragraph">Your paragraph here. This is where you can add more detailed information or a description to complement the video and title on the left side.</p>
      </div>
    </div>
    <div>  
      <BackButton/>
    </div>
  </div>

  )
}

export default MoviesDesc