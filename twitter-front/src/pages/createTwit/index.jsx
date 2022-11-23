import React, {useState} from 'react';
import MainLayout from "../../UI/Layouts/MainLayout";

import * as SC from './styles';
import {setToken} from "../../services/LocalStorage";
import {fetchApi} from "../../services/Fetch";
import {useNavigate} from "react-router-dom";

const CreateTwit = () => {
    const [twit, setTwit] = useState('');

    const [responseResult, setResponseResult] = useState(null);


    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setTwit(e.target.value);
    };

    const handleSubmitButtonClick = () => {
        fetchApi('twits', {
            method: 'POST',
            body: {
                text: twit,
            },
        }).then((res) => {
            console.log(res)
            setResponseResult(res.message);
            navigate('/');
        });
    }

    return (
        <MainLayout>
            <SC.Title>
                Create your twit!
            </SC.Title>

            <SC.FormWrapper>
                <SC.InputWrapper>
                    <SC.InputTitle>
                        Enter your message here
                    </SC.InputTitle>
                    <SC.TextArea
                        value={twit}
                        onChange={(e) => handleInputChange(e)}
                    />
                </SC.InputWrapper>

                <SC.ButtonWrapper>
                    <SC.SubmitButton onClick={handleSubmitButtonClick}>
                        Publish
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

export default CreateTwit;