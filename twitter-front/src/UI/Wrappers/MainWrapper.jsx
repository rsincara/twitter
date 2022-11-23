import React from 'react';

import * as SC from './styles';

const MainWrapper = ({ children }) => {
    return (
        <SC.MainWrapper>
            {children}
        </SC.MainWrapper>
    );
};

export default MainWrapper;