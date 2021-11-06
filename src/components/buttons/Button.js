import React from 'react';
import { Button } from 'react-bootstrap';

const BaseButton = ({ type, variant, className, children, leftIcon, onClick }) => {
    return (
        <Button type={type} variant={variant} className={className} onClick={onClick}>
            {leftIcon && leftIcon}
            {children}
        </Button>
    )
}

export default BaseButton;
