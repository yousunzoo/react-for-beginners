import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "../src/App.css";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/react-for-beginners" exact={true} element={<Home />} />
        <Route
          path="/react-for-beginners/movie-detail/:id"
          element={<Detail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
