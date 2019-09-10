import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Basic from './Basic'
import RegisterTicket from './RegisterTicket';


class UserPage extends React.Component {

  constructor(){
    super();
    this.state = {
      person: {},
    }
  }


  componentDidMount() {
    this.getData();
}

  getData() {
    fetch('http://localhost:8080/userInfo', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(results => results.json())
        .then(results => this.setState({ person: results }));
}



  render(){
    return (
      <div className="App">
        <h1>Login as {this.state.person.name + " " + this.state.person.lastname}</h1>
        <h2>Position: {this.state.person.position}</h2>
        <h2>Email: {this.state.person.email}</h2>
        <h2>Department: {this.state.person.department}</h2>
        <BrowserRouter>
          <div>
            <ul className="nav nav-pills justify-content-end">
                <li className="nav-item" >
                    <Link to="/Basic">Basic Data</Link>
                </li>
                <li className="nav-item" >
                    <Link to="/registerTicket">Register Ticket</Link>
                </li>
            </ul>
            <Route path="/Basic" component={Basic} />
            <Route path="/registerTicket" component={RegisterTicket} />
        </div>
    </BrowserRouter>
    </div>
    )}
}

export default UserPage;