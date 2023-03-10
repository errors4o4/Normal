import React from 'react'
import logo1  from '../assets/88879dec-a30c-44d8-81de-a1a1bddfca00.JPG'
import logo2 from '../assets/ad46fd4e-963b-4f97-bf4e-f38166a3b312.JPG'
import logo3 from '../assets/d0a5cbd6-29db-4f28-8f07-2d4be02a4504.JPG'
function home() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={logo1} className="d-block w-100" alt="img1" />
          </div>
          <div className="carousel-item">
            <img src={logo2} className="d-block w-100" alt="img2" />
          </div>
          <div className="carousel-item">
            <img src={logo3} className="d-block w-100" alt="img3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}

export default home