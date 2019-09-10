import React from 'react';
import '../App.css';

class AdminCreateUser extends React.Component {

  constructor() {
    super();
    this.state = {
      email:'',
      name:'',
      lastName:'',
      department:'',
      password:'',
      position:'',
      role:'',
      response: {}
    }
    
    this.handleEmail = this.handleEmail.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleDepartment = this.handleDepartment.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handlePosition = this.handlePosition.bind(this);
    this.handleRole = this.handleRole.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  handleEmail(event){
    this.setState({email: event.target.value});
  }

  handleName(event){
    this.setState({name: event.target.value});
  }

  handleLastName(event){
    this.setState({lastName: event.target.value});
  }

  handleDepartment(event){
    this.setState({department: event.target.value});
  }

  handlePassword(event){
    this.setState({password: event.target.value});
  }

  handlePosition(event){
    this.setState({position: event.target.value});
  }

  handleRole(event){
    this.setState({role: event.target.value});
  }

  sendData(event) {
    event.preventDefault();
    var url = 'http://localhost:8080/admin/createUser';
    var data = {
      email: this.state.email,
      name: this.state.name,
      lastname: this.state.lastName,
      department: this.state.department,
      password: this.state.password,
      position: this.state.position,
      role: this.state.role
    };
    fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data),
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(results => this.setState({
        response: results
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Register User Page</h1>
        <h3>{(this.state.response.status===200) ? "User Created " : null} </h3>
        
        <form>
          <p>
            <label>Email:</label>
            <input type="text" onChange={this.handleEmail} value={this.state.email} name="email" placeholder="john.kowalsky@corpoemail.com"></input>
          </p>
          <p>
            <label>Name:</label>
            <input type="text" onChange={this.handleName} value={this.state.name} name="name" placeholder="John" />
          </p>
          <p>
            <label>Last name:</label>
            <input type="text" onChange={this.handleLastName} value={this.state.lastName} name="lastName" placeholder="Kowalsky" />
          </p>
          <p>
            <label className="text-uppercase">Department:</label>
            <select className="form-control" value={this.state.department} onChange={this.handleDepartment}>
              <option>R&amp;D</option>
              <option>RIM</option>
              <option>BPO</option>
              <option>EMEIA</option>
              <option>BAS</option>
              <option>SD</option>
              <option>L&amp;D</option>
            </select>
          </p>
          <p>
            <label>Password:</label>
            <input type="text" onChange={this.handlePassword} value={this.state.password} name="password" placeholder="razdwatrzybabajagapatrzy123" />
          </p>
          <p>
            <label>Position:</label>
            <input type="text" onChange={this.handlePosition} value={this.state.position} name="position" placeholder="Cleaner" />
          </p>
          <p>
            <label>Role:</label>
            <input type="text" onChange={this.handleRole} value={this.state.role} name="role" placeholder="User" />
          </p>
          <p>
            <button onClick={this.sendData}>Log In</button><br />
          </p>
        </form>
      </div>
    )
  }
}

export default AdminCreateUser;