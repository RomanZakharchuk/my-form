import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password_one: "", password_two: "" };

    this.onChangePassOne = this.onChangePassOne.bind(this);
    this.onChangePassTwo = this.onChangePassTwo.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    alert(`Your Name:  ${this.state.name}
    Your Email: ${this.state.email}`);

    if (`${this.state.password_one}` != `${this.state.password_two}`) {
      alert("Your password incorrect!");
    } else {
      alert("Congratulations!");
    }
    event.preventDefault();
  }

  onChangePassOne = (event) => {
    this.setState({ password1: event.target.value });
  };

  onChangePassTwo = (event) => {
    this.setState({ password2: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div className="forms">
        <form onSubmit={this.onSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.value}
              onChange={this.onChangeName}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.value}
              onChange={this.onChangeEmail}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password_one"
              value={this.state.value}
              onChange={this.onChangePassOne}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password_two"
              value={this.state.value}
              onChange={this.onChangePassTwo}
            />
          </label>
          <br />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default App;
