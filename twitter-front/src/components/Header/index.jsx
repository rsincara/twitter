import React from 'react';

import * as SC from './styles';
import {useSelector} from "react-redux";
import {selectUserInfo} from "../../redux/user/selectors";
import Button from "../../UI/Button";
import { clearToken } from "../../services/LocalStorage";
import { NavBar } from '../../UI/NavBar/style';

const Header = () => {
    const userInfo = useSelector(selectUserInfo);

    const isAuthorized = !!userInfo;

    const handleLogoutClick = () => {
        clearToken();
        window.location = '/login';
    };

    return (
        <SC.Header>
            <SC.Content>
                <SC.Logo to={'/'}>
                    Twitty
                </SC.Logo>

                <NavBar>
                    <SC.NavItem to='/twits'>Twits</SC.NavItem>
                    <SC.NavItem to='/my-twits'>My Twits</SC.NavItem>
                    <SC.NavItem to='/create-twit'>Create</SC.NavItem>
                </NavBar>

                {isAuthorized && (
                    <Button onClick={handleLogoutClick}>
                        Logout
                    </Button>
                )}
            </SC.Content>
        </SC.Header>
    );
};

export default Header;