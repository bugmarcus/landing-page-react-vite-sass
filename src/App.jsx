// App.jsx
import React from "react";
import ConstructionPage from "./components/ConstructionPage";
import AnimatedBackground from "./components/AnimatedBackground";

import "./App.css";

function App() {
  return (
    <div className="app">
      <ConstructionPage />
      <AnimatedBackground />
    </div>
  );
}

export default App;
