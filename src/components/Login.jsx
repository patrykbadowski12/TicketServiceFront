import React from 'react';
import '../App.css';
import {withRouter} from 'react-router-dom';

class Login extends React.Component {

  constructor(){
    super();
    this.state = {
      response : {},
      email: '',
      password: '',
      department: '',
    }
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleDepartment = this.handleDepartment.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  handleEmail(event){
    this.setState({email: event.target.value});
  }

  handlePassword(event){
    this.setState({password: event.target.value});
  }

  handleDepartment(event){
    this.setState({department: event.target.value});
  }

  sendData(event) {
    event.preventDefault();
    var url = 'http://localhost:8080/login';
    var data = {
        email: this.state.email,
        password: this.state.password,
        department: this.state.department
    };
    fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data),
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(results => results.text()).then(results => this.setState({
        response: results
    }));
    console.log(this.state.response);
   if(this.state.response ==="USER"){
    this.props.history.push('/UserPage')
  } else if (this.state.response ==="ADMIN") {
    this.props.history.push('/AdminPage')
  }
}

  render(){
    return (
    <div className="App">
      <form>
        <p>
          <label>Email:</label>
          <input type="text" onChange={this.handleEmail} value={this.state.email} name="email" placeholder="john.kowalsky@corpoemail.com"></input>
        </p>
        <p>
          <label>Password:</label>
          <input type="password" onChange={this.handlePassword} value={this.state.password} name="password" placeholder="password" />
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
          <button onClick={this.sendData}>Log In</button><br />
        </p>
      </form>
    </div>
    )}
}

export default withRouter(Login);