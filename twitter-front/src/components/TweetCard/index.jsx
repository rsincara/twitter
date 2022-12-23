import React from 'react';

import * as SC from './styles';

const TwitCard = ({
    twit,
}) => {
    return (
        <SC.Twit>
            <SC.Top>
                <SC.Author isSubscribed={twit.isSubscribed}>
                    {twit.author}
                </SC.Author>
                <SC.Date>
                    {new Date(twit.created_date).toLocaleDateString()}
                </SC.Date>
            </SC.Top>
            <SC.TwitContent>
                {twit.post}
            </SC.TwitContent>
        </SC.Twit>
    );
};

export default TwitCard;