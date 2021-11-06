import React from 'react';
import './jobTypes.css';

const JobTypes = ({ leftIcon, job_type, num_of_positions, bottom_border, right_left_border }) => {
    return (
        <div className={`d-flex align-items-center job_types ${bottom_border && 'bottom_border'} ${right_left_border && 'right_left_border'}`}>
            {leftIcon && leftIcon}
            <div>
                <h6 className="mb-0">{job_type}</h6>
                <small className="text-muted">{num_of_positions} open positions</small>
            </div>
        </div>
    )
}

export default JobTypes;
