import React from 'react';

import * as SC from './styles';

const NavBar = ({ children }) => {

    return (
        <SC.NavBar>
            <SC.NavLink>
                {children}
            </SC.NavLink>
        </SC.NavBar>
    );

};

export default NavBar;