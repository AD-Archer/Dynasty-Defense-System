import React, { useState } from "react";
import "./App.css";
import Register from "./components/register.js";
import Login from "./components/login.js";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const togglePage = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="App">
      {showLogin ? (
        <Login togglePage={togglePage} showLogin={showLogin} />
      ) : (
        <Register togglePage={togglePage} showLogin={showLogin} />
      )}
    </div>
  );
}

export default App;
