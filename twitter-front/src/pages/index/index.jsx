import React, {useEffect, useState} from 'react';
import MainLayout from "../../UI/Layouts/MainLayout";
import { useNavigate } from "react-router-dom";

import * as SC from './styles';
import {setToken} from "../../services/LocalStorage";
import {fetchApi} from "../../services/Fetch";
import {useSelector} from "react-redux";
import {selectUserBranch, selectUserInfo} from "../../redux/user/selectors";

const Index = () => {

    const userInfo = useSelector(selectUserInfo);

    return (
        <MainLayout>
            <SC.Title>
                Welcome to twitty, {userInfo?.login}!
            </SC.Title>
        </MainLayout>
    );
};

export default Index;