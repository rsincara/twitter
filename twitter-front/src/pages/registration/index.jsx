import React, {useState} from 'react';
import MainLayout from "../../UI/Layouts/MainLayout";

import * as SC from './styles';
import { fetchApi } from "../../services/Fetch";
import { useNavigate } from "react-router-dom";

const Registration = () => {

    const [registration, setRegistration] = useState({
        login: '',
        password: '',
    });

    const [responseResult, setResponseResult] = useState(null);

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const navigate = useNavigate();

    const handleInputChange = (e, name) => {
        setRegistration({
            ...registration,
            [name]: e.target.value,
        })
    };

    const handleSubmitButtonClick = () => {

        fetchApi('users/register', {
            method: 'POST',
            body: {
                registration,
            },
        }).then((res) => {
            setResponseResult(res.message);
            navigate('/');
        });
    }

    return (
        <MainLayout>
            <SC.Title>
                Registration page
            </SC.Title>

            <SC.FormWrapper>
                <SC.InputWrapper>
                    <SC.InputTitle>
                        Login
                    </SC.InputTitle>
                    <SC.Input
                        value={registration.login}
                        onChange={(e) => handleInputChange(e, 'login')}
                    />
                </SC.InputWrapper>

                <SC.InputWrapper>
                    <SC.InputTitle>
                        Password
                    </SC.InputTitle>

                    <SC.HideShowPassword onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                        {isPasswordVisible ? 'hide' : 'show'}
                    </SC.HideShowPassword>

                    <SC.Input
                        type={isPasswordVisible ? 'text' : 'password'}
                        value={registration.password}
                        onChange={(e) => handleInputChange(e, 'password')}
                    />
                </SC.InputWrapper>

                <SC.ButtonWrapper>
                    <SC.SubmitButton onClick={handleSubmitButtonClick}>
                        Register
                    </SC.SubmitButton>
                </SC.ButtonWrapper>
            </SC.FormWrapper>

            {responseResult && (
                <SC.Result>
                    {responseResult}
                </SC.Result>
            )}
        </MainLayout>
    );
};

export default Registration;