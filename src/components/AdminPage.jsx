import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import AdminCreateUser from './AdminCreateUser';
import ManageTickets from './ManageTickets';


class AdminPage extends React.Component {

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
                    <Link to="/registerUser">Register User</Link>
                </li>
                <li className="nav-item" >
                    <Link to="/manageTickets">Manage Ticket</Link>
                </li>
            </ul>
            <Route path="/registerUser" component={AdminCreateUser} />
            <Route path="/manageTickets" component={ManageTickets} />
        </div>
    </BrowserRouter>
    </div>
    )}
}

export default AdminPage;