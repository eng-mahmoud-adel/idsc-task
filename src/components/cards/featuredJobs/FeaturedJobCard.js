import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { IoLocationSharp } from 'react-icons/io5';
import { BiTimeFive } from 'react-icons/bi';
import './featuredJobCard.css';
import BaseButton from '../../buttons/Button';

const FeaturedJobCard = () => {
    return (
        <Card className="featured_job">
            <div className="job_picture">
                <Card.Img variant="top" src="assets/images/job.jpg" />
                <Badge bg="success" className="p-2">TEMPORARY</Badge>
            </div>
            <Card.Body>
                <div className="job_info d-flex align-items-center">
                    <div className="company_picture me-2">
                        <img src="assets/images/pepsi.png" />
                    </div>
                    <div>
                        <Card.Title className="mb-0">Front-end Developer</Card.Title>
                        <small className="text-primary pe-2 pe-md-1 pe-lg-2 company_name">TieLabs</small>
                        <small className="text-muted ps-2 ps-md-1 pe-lg-2">Beautiful WP Themes</small>
                    </div>
                </div>
                <Card.Text className="text-muted my-4 job_description">
                    We are looking for a talented, Egypt-based front end developer for an immediate mobile website project (plus various other projects in the future).
                </Card.Text>
                <div className="job_location_time d-flex justify-content-around text-muted">
                    <div className="job_location">
                        <IoLocationSharp className="me-1" />
                        <span>Moscow, Russia</span>
                    </div>
                    <div className="job_time">
                        <BiTimeFive className="me-1" />
                        <span>8 hours ago</span>
                    </div>
                </div>
            </Card.Body>
            <Card.Footer className="bg-white">
                <BaseButton className="apply_btn">Apply For The Job</BaseButton>
            </Card.Footer>
        </Card>
    )
}

export default FeaturedJobCard;
