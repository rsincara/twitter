import React, {useEffect, useState} from 'react';
import MainLayout from "../../UI/Layouts/MainLayout";

import * as SC from './styles';
import { fetchApi } from "../../services/Fetch";
import Twit from "../../components/Twit";
import Loader from "../../UI/Loader/Loader";

const MyTwits = () => {
    const [twits, setTwits] = useState(null);

    useEffect(() => {
        fetchApi('twits').then((res) => {
            console.log('res', res);
            setTwits(res.twits)
        });
    }, []);

    return (
        <MainLayout>
            <SC.Title>
                Twits:
            </SC.Title>

            {!twits && (
                <Loader />
            )}
            {twits && twits.map((twit) => (
                <Twit key={twit.id} twit={twit} />
            ))}
        </MainLayout>
    );
};

export default MyTwits;