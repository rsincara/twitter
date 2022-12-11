import React from 'react';

import * as SC from './styles';

const Twit = ({
    twit,
    onAuthorClick
}) => {
    return (
        <SC.Twit>
            <SC.Top>
                <SC.Author
                    isSubscribed={twit.isSubscribed}
                    onClick={() => onAuthorClick(twit)}
                >
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

export default Twit;