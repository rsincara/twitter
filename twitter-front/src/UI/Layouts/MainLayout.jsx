import React from 'react';

import Header from "../../components/Header";

import { MainWrapper } from "../Wrappers/styles";

import * as SC from './styles';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <SC.Main>
                <MainWrapper>
                    {children}
                </MainWrapper>
            </SC.Main>
        </div>
    );
};

export default MainLayout;