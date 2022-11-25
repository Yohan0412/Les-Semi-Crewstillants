
import React from "react";
import PageContact from "@pages/PageContact";
import "./App.css";
import LesRecettes from "@pages/LesRecette";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <div className="App">
        <Home />
        <PageContact />
      </div>
    </div>
  );
}

export default App;
