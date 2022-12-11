import './App.css';
import {Route, Routes} from "react-router-dom"
import Login from "./pages/login";
import Registration from "./pages/registration";
import Index from "./pages/index";
import CreateTwit from "./pages/createTwit";
import MyTwits from "./pages/myTwits";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { selectUserBranch } from "./redux/user/selectors";
import {getUserInfo} from "./redux/user";
import Twits from "./pages/twits";
import Loader from './UI/Loader/Loader';

function App() {
    const dispatch = useDispatch();

    const { isLoading } = useSelector(selectUserBranch);

    useEffect(() => {
        dispatch(getUserInfo());
    }, []);

    if (isLoading) {
        return (
            <Loader/>
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
