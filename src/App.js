import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: '',
      phone: '',
      email: '',
      address: '',
      submitted: false,
    }
    
  }

  handleChange(e, field) {
    this.setState({[field]: e.target.value})
  }

  handleSubmit() {
    this.setState({submitted: true})
  }

  render() {
    const {name, email, phone, address, submitted} = this.state
    console.log(this.state)

      return (
        <div className="App">
          <InputForm name={name} email={email} phone={phone} address={address} handleChange={this.handleChange} handleSubmit={this.handleSubmit}   />
          {submitted && <RenderData name={name} email={email} phone={phone} address={address} />}
        </div>
      );
  }

}

const InputForm = (props) => {
  return (
    <div>
      <h1>Demo Form</h1>
      <div className="form">
      <div>
      <label>Name</label>
      <input name="name" id="name" value={props.name} onChange={e => props.handleChange(e, "name")} />
      </div>
      
      <div>
      <label>Email</label>
      <input name="email" id="email" value={props.email} onChange={e => props.handleChange(e, "email")} />
      </div>

      <div>
      <label>Phone</label>
      <input name="tel" id="phone" value={props.phone} onChange={e => props.handleChange(e, "phone")} />
      </div>

      <div>
      <label>Address</label>
      <input name="text" id="address" value={props.address} onChange={e => props.handleChange(e, "address")} />
      </div>        
      </div>


      <input type="submit" onClick={props.handleSubmit} />
  </div>
  )

}

const RenderData = (props) => {
  return (
  <div>
    <h2>Name</h2>
    <p>{props.name}</p>
    <h2>Email</h2>
    <p>{props.email}</p>
    <h2>Phone</h2>
    <p>{props.phone}</p>
    <h2>Address</h2>
    <p>{props.address}</p>
  </div>);
}

export default App;
