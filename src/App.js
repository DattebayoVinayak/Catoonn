import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import AnimeDetails from "./pages/AnimeDetails";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AnimeWatch from "./pages/AnimeWatch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="anime/:id" element={<AnimeDetails />} />
          <Route path="watch/:id" element={<AnimeWatch />} />
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
