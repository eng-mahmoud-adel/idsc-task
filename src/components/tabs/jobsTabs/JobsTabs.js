import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import BaseButton from '../../buttons/Button';
import Job from '../../job/Job';
import './jobsTabs.css';

const JobsTabs = ({ tabsKeys }) => {
    const [keys, setKeys] = useState(tabsKeys);
    const [activeKey, setActiveKey] = useState(keys[0]);
    
    return (
        <Tabs
            id="jobsTabs"
            activeKey={activeKey}
            onSelect={(k) => setActiveKey(k)}
            className="jobsTabs"
        >
            {keys.map(key => 
                <Tab eventKey={key} title={key} key={key}>
                    <div className="container py-3 px-1 px-lg-4">
                        <Job company_image="./assets/images/cocacola.png" job_title="Project Manager" company_name="cocaCola" slogan="Open Happiness" job_location="Moscow, Russia" job_time="8 hours ago" job_type="TEMPORARY" job_color="success" />
                    </div>
                    <div className="container py-3 px-1 px-lg-4">
                        <Job company_image="./assets/images/ibm.png" job_title="Graphic Designer" company_name="IBM" slogan="Design, Deploy, Do stress" job_location="New York, NY" job_time="22 hours ago" job_type="INTERNSHIP" job_color="danger" />
                    </div>
                    <div className="container py-3 px-1 px-lg-4">
                        <Job company_image="./assets/images/macdonalds.jpg" job_title="Restaurant Dishwasher" company_name="McDonald's" slogan="I'm lovin' it" job_location="Gainsville, FL" job_time="a day ago" job_type="PART TIME" job_color="warning" />
                    </div>
                    <div className="container py-3 px-1 px-lg-4">
                        <Job company_image="./assets/images/pepsi.png" job_title="Digital PR manager" company_name="Pepsi" slogan="Refresh Your World" job_location="Washington, D.C." job_time="2 days ago" job_type="FREELANCE" job_color="info" />
                    </div>
                    <div className="container py-3 px-1 px-lg-4">
                        <BaseButton className="w-100 load_more">LOAD MORE LISTINGS</BaseButton>
                    </div>
                </Tab>
            )}
        </Tabs>
    )
}

export default JobsTabs;
