import React from 'react';

import * as SC from './styles';

const Button = ({
    children,
    onClick,
}) => {
    return (
        <SC.Button onClick={onClick}>
            {children}
        </SC.Button>
    );
};

export default Button;