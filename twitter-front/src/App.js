import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom"
import Login from "./pages/login";
import Registration from "./pages/registration";
import Index from "./pages/index";
import CreateTwit from "./pages/createTwit";
import MyTwits from "./pages/myTwits";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { selectUserBranch } from "./redux/user/selectors";
import {getUserInfo} from "./redux/user";
import Twits from "./pages/twits";

function App() {
    const dispatch = useDispatch();

    const { isLoading } = useSelector(selectUserBranch);

    useEffect(() => {
        dispatch(getUserInfo());
    }, []);

    console.log('isLoading: ', isLoading)

    if (isLoading) {
        return (
            <div>
                Loader...
            </div>
        )
    }

    return (
        <>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/create-twit" element={<CreateTwit/>}/>
                <Route path="/my-twits" element={<MyTwits/>}/>
                <Route path="/twits" element={<Twits/>}/>
                <Route path="/" element={<Index/>}/>
            </Routes>
        </>
    );
}

export default App;
