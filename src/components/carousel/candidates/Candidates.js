import React, { useState } from 'react';
import Slider from "react-slick";
import './candidates.css';

const Candidates = () => {
    const [settings, setSettings] = useState({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 991.98,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
      })

    return (
        <Slider {...settings}>
          <div>
            <img src="assets/images/steve.jpg" />
          </div>
          <div>
            <img src="assets/images/steve.jpg" />
          </div>
          <div>
            <img src="assets/images/steve.jpg" />
          </div>
          <div>
            <img src="assets/images/steve.jpg" />
          </div>
          <div>
            <img src="assets/images/steve.jpg" />
          </div>
          <div>
            <img src="assets/images/steve.jpg" />
          </div>
          <div>
            <img src="assets/images/steve.jpg" />
          </div>
          <div>
            <img src="assets/images/steve.jpg" />
          </div>
          <div>
            <img src="assets/images/steve.jpg" />
          </div>
          <div>
            <img src="assets/images/steve.jpg" />
          </div>
        </Slider>
    )
}

export default Candidates;
