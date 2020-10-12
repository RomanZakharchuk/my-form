import React from "react";
import "./App.css";

function App() {
  return (
    <div className="forms">
      <form>
        <label>
          Name:
          <input type="text" name="name" id="my-name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" id="my-email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password1" id="pass1" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password2" id="pass2" />
        </label>
        <br />
        <input type="submit" value="Send" onClick={sendName} />
      </form>
    </div>
  );
}

function sendName() {
  const nameValue = document.getElementById("my-name");
  const emailValue = document.getElementById("my-email");
  const pass1 = document.getElementById("pass1");
  const pass2 = document.getElementById("pass2");

  if (pass1.value != pass2.value) {
    alert("Error!");
  }

  alert("Name: " + nameValue.value + " Email: " + emailValue.value);
}

export default App;
