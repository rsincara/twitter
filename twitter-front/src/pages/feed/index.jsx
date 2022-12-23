import React, { useEffect, useState } from 'react';
import MainLayout from "../../UI/Layouts/MainLayout";

import { fetchApi } from "../../services/Fetch";
import Loader from "../../UI/Loader/Loader";
import TwitCard from "../../components/TweetCard";

import * as SC from './styles';

const MyTwits = () => {
    const [feed, setFeed] = useState(null);

    useEffect(() => {
        fetchApi('twits/feed').then((res) => {
            console.log('res', res);
            setFeed(res.twits)
        });
    }, []);

    return (
        <MainLayout>
            <SC.Title>
                Feed
            </SC.Title>

            {!feed && (
                <Loader />
            )}
            {feed && (
                <SC.TweetWrapper>
                    {feed.map((twit) => (
                        <TwitCard
                            key={twit.id}
                            twit={twit}
                        />
                    ))}
                </SC.TweetWrapper>
            )}
        </MainLayout>
    );
};

export default MyTwits;