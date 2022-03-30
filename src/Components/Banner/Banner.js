import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import bannerA from '../../Images/banner-1.jpg';
import bannerB from '../../Images/banner-2.jpg';
import bannerC from '../../Images/banner-3.jpg';

const Banner = () => {
    return (
        <div className="">
            <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block banner-img"
      src={bannerA}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='slide-1'>Successful Alumni</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mt-0 banner-img"
      src={bannerB}
      alt="Second slide"
    />
    <Carousel.Caption >
      <h3 className='banner-text' >Best Learning Environment</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block banner-img"
      src={bannerC}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3  className='banner-text-3'> 24/7 Open Library</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;