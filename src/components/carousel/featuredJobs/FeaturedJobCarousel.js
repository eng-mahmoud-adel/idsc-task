import React from 'react';
import { Carousel } from 'react-bootstrap';
import FeaturedJobCard from '../../cards/featuredJobs/FeaturedJobCard';
import './featuredJobCarousel.css';

const FeaturedJobCarousel = () => {
    return (
        <Carousel indicators={false}>
            <Carousel.Item>
                <FeaturedJobCard />
            </Carousel.Item>

            <Carousel.Item>
                <FeaturedJobCard />
            </Carousel.Item>

        </Carousel>
    )
}

export default FeaturedJobCarousel;
