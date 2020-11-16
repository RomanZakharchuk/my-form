import React from "react";
import MyLabel from "./components/form";
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: '', email: '', passwordFirst: '', passwordSecond: '' };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }



  handleFormSubmit() {
    const { name, email, passwordFirst, passwordSecond } = this.state;

    alert(`Your Name: ${name}` + `Your Email: ${email}`);

    if (passwordFirst != passwordSecond) {
      alert('Error!');
    } else {
      alert('Congratulations!');
    }
  }

  onName = (event) => {
    this.setState({ name: event.target.value });
  }
  onEmail = (event) => {
    this.setState({ email: event.target.value });
  }
  onPassOne = (event) => {
    this.setState({ passwordFirst: event.target.value });
  }
  onPassTwo = (event) => {
    this.setState({ passwordSecond: event.target.value });
  }

  render() {
    return (
      <BigBox>
        <Form onSubmit={this.handleFormSubmit}>
          <MyLabel type="name" name="name" text="Name:" value={this.state.value} onChange={this.onName} />
          <MyLabel type="email" name="email" text="Email:" value={this.state.value} onChange={this.onEmail} />
          <MyLabel type="password" name="passwordFirst" text="Password:" value={this.state.value} onChange={this.onPassOne} />
          <MyLabel type="password" name="passwordSecond" text="Password:" value={this.state.value} onChange={this.onPassTwo} />
          <input type="submit" value="Submit" />
        </Form>
      </BigBox>
    );
  }
}



const BigBox = styled.div`
  margin: auto;
  width: 500px;
  height: 350px;
  background-color: aquamarine;
  border: 1px solid blueviolet;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
padding: 5px;
max-width: 250px;
display: flex;
flex-direction: column;
align-items: flex-end;
`;

export default App;
