import React from 'react';

import * as SC from './styles';

const Twit = ({
    twit
}) => {
    return (
        <SC.Twit>
            <SC.Top>
                <SC.Author>
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