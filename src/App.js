import React from "react";
import "./App.css";

function App() {
  return (
    <div className="forms">
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default App;
