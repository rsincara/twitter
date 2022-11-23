import React, {useEffect, useState} from 'react';
import MainLayout from "../../UI/Layouts/MainLayout";
import { useNavigate } from "react-router-dom";

import * as SC from './styles';
import {setToken} from "../../services/LocalStorage";
import {fetchApi} from "../../services/Fetch";

const Login = () => {
    const [responseResult, setResponseResult] = useState(null);

    useEffect(() => {
        fetchApi('users/user-info').then((res) => {
            console.log(res)
            setResponseResult(res.user);
        })
    }, []);

    return (
        <MainLayout>
            {responseResult && (
                <SC.Title>
                    Welcome to twitty, {responseResult.login}!
                </SC.Title>
            )}

        </MainLayout>
    );
};

export default Login;