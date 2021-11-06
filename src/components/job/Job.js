import React from 'react';
import { Row, Col, Badge } from 'react-bootstrap';
import { IoLocationSharp } from 'react-icons/io5';
import { BiTimeFive } from 'react-icons/bi';
import { HiDotsHorizontal } from 'react-icons/hi';
import './job.css';

const Job = ({ company_image, job_title, company_name, slogan, job_location, job_time, job_type, job_color }) => {
    return (
        <Row className="align-items-baseline">
            <Col xs={12} lg={4} className="mb-3 mb-lg-0">
                <div className="job d-flex">
                    <div className="job_image me-2">
                        <img src={company_image} />
                    </div>
                    <div className="info">
                        <h6>{job_title}</h6>
                        <div className="d-flex align-items-center">
                            <small className="pe-1 text-primary company_name">{company_name}</small>
                            <small className="ps-1 text-muted company_slogan">{slogan}</small>
                        </div>
                    </div>
                </div>
            </Col>

            <Col xs={4} lg={3}>
                <div className="job_location">
                    <IoLocationSharp className="me-1" />
                    <span>{job_location}</span>
                </div>
            </Col>

            <Col xs={4} lg={2}>
                <div className="job_time">
                    <BiTimeFive className="me-1" />
                    <span>{job_time}</span>
                </div>
            </Col>

            <Col xs={4} lg={3}>
                <div className="job_type text-end">
                    <Badge bg={job_color} className="me-1">{job_type}</Badge>
                    <HiDotsHorizontal />
                </div>
            </Col>
        </Row>
    )
}

export default Job;
