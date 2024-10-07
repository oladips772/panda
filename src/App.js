/** @format */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Earn from "./pages/Earn";
import Influencers from "./pages/Influencers";
import Profile from "./pages/Profile";
import Airdrop from "./pages/Airdrop";
import Loading from "./pages/Loading";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/home" element={<Home />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/influencers" element={<Influencers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/airdrop" element={<Airdrop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
