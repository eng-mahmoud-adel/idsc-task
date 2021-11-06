import React from 'react';
import { Form, Row, Col, Accordion } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import BaseButton from '../buttons/Button';
import './jobSearch.css';

const JobSearch = () => {
    return (
        <Form className="job_search">
            <div className="d-flex align-items-center job_search_header">
                <BiSearch className="col-2" size={25} />
                <h5 className="col-10">Start Searching</h5>
            </div>
            <Form.Group as={Col} className="px-4 py-2 col-6 col-12">
                <Form.Label>Job</Form.Label>
                <Form.Control type="text" placeholder="Job title, Keywords" />
            </Form.Group>
            <Form.Group as={Col} className="px-4 py-2 col-6 col-12">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="City, province or region" />
            </Form.Group>
            <Form.Group as={Col} className="px-4 py-2 col-6 col-12">
                <Form.Label>Category</Form.Label>
                <Form.Select className="border" defaultValue="Select Industry">
                    <option value="" disabled>Select Industry</option>
                    <option>industry 1</option>
                    <option>industry 2</option>
                    <option>industry 3</option>
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col} className="px-4 py-2 col-6 col-12">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>CONTRACT TYPE</Accordion.Header>
                        <Accordion.Body>
                            <Form.Check type="checkbox" label="type 1" />
                            <Form.Check type="checkbox" label="type 2" />
                            <Form.Check type="checkbox" label="type 3" />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>SPECIALISMS</Accordion.Header>
                        <Accordion.Body>
                            <Form.Check type="checkbox" label="specialism 1" />
                            <Form.Check type="checkbox" label="specialism 2" />
                            <Form.Check type="checkbox" label="specialism 3" />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Form.Group>
            <Form.Group as={Col} className="px-4 py-2 col-6 col-12">
                <BaseButton type="submit" className="submit w-100" leftIcon={<BiSearch className="me-2" size={25} />}>
                    Search
                </BaseButton>
            </Form.Group>   
        </Form>
    )
}

export default JobSearch;
