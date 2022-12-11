import React from 'react';
import {ReactComponent as Loader} from './Loader.svg';

const LoaderWrapper = () => {
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center'
        }}>
            <Loader />
        </div>
    )
}

export default LoaderWrapper;