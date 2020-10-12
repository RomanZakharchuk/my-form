import React from "react";
import "./App.css";

function App() {
  return (
    <div className="forms">
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password1" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password2" />
        </label>
        <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default App;
