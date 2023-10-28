import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.style.css";
import { NavBar } from "./components/navbar";
const App: React.FC = () => {
  return (
    <div id="microfrontend-menu">
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </div>
  );
};

export default App;
