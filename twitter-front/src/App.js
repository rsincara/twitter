import './App.css';
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom"
import Login from "./pages/login";
import Registration from "./pages/registration";
import Index from "./pages/index";
import CreateTwit from "./pages/createTwit";
import MyTwits from "./pages/myTwits";

function App() {
  return (
      <>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/create-twit" element={<CreateTwit />} />
              <Route path="/my-twits" element={<MyTwits />} />
              <Route path="/" element={<Index />} />
          </Routes>
      </>
  );
}

export default App;
