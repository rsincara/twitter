import React, {useEffect, useState} from 'react';
import MainLayout from "../../UI/Layouts/MainLayout";

import * as SC from './styles';
import {setToken} from "../../services/LocalStorage";
import {fetchApi} from "../../services/Fetch";
import {useNavigate} from "react-router-dom";
import Loader from "../../UI/Loader/Loader";

const MyTwits = () => {
    const [twits, setTwits] = useState(null);

    useEffect(() => {
        fetchApi('twits/my-twits').then((res) => {
            console.log('res', res);
            setTwits(res.twits)
        });
    }, []);

    return (
        <MainLayout>
            <SC.Title>
                Your twits:
            </SC.Title>

            {!twits && (
                <Loader />
            )}
            {twits && twits.map((twit) => (
                <SC.Twit key={twit.id}>
                    {twit.post}
                </SC.Twit>
            ))}
        </MainLayout>
    );
};

export default MyTwits;