import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);  // More descriptive variable name
  }

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>  {/* Improved className condition */}
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}  {/* More descriptive button text */}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
