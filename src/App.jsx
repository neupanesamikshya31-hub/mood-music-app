import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Mood from "./pages/mood/Mood";
import Player from "./pages/player/Player";
import Favourite from "./pages/favourites/Favourites";
import Profile from "./pages/profile/Profile";
import About from "./pages/about/About";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mood/:type" element={<Mood />} />
        <Route path="/player" element={<Player />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;