import React from 'react';
import { Row, Col, Form, InputGroup, FormControl } from 'react-bootstrap';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import BaseButton from '../../buttons/Button';
import './socialMedia.css';

const SocialMedia = ({ socialMedia }) => {
    return (
        <>
            {socialMedia == 'telegram' && <div className="telegram_social_media">
                <div className="d-flex social_header align-items-center">
                    <div className="social_icon">
                        <FaTelegramPlane size={25} color='white' />
                    </div>
                    <div className="social_title">
                        <h6 className="mb-0">Subscribe Our News</h6>
                    </div>
                </div>

                <div className="social_body">
                    <p>Subscribe to our newsletter to get the latest jobs posted, candidates and latest news.</p>
                    <Form>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>
                                <MdEmail size={25} color="white" />
                            </InputGroup.Text>
                            <FormControl placeholder="Enter Your Email" />
                        </InputGroup>

                        <BaseButton className="w-100 mt-3">SUBSCRIBE</BaseButton>
                    </Form>
                </div>
            </div>}

            {socialMedia == 'twitter' && <div className="twitter_social_media mt-3 mt-lg-0">
                <div className="d-flex social_header align-items-center">
                    <div className="social_icon">
                        <BsTwitter size={25} color='white' />
                    </div>
                    <div className="social_title">
                        <h6 className="mb-0">Latest Tweets</h6>
                    </div>
                </div>

                <div className="social_body">
                    <small className="bg-black px-3">@tielabs</small>
                    <p className="my-3">Subscribe to our newsletter to get the latest jobs posted, candidates and latest news.</p>
                    <div className="mt-5">
                        <BiTimeFive className="me-1" />
                        <span>8 hours ago</span>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default SocialMedia;
