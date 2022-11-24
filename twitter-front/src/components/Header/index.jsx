import React from 'react';

import * as SC from './styles';
import {useSelector} from "react-redux";
import {selectUserBranch, selectUserInfo} from "../../redux/user/selectors";
import Button from "../../UI/Button";
import { clearToken } from "../../services/LocalStorage";

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