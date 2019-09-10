import React from 'react';
import '../App.css';

class ManageTickets extends React.Component {

  constructor(){
    super();
    this.state = {
      tickets: []
    }
  }

  componentDidMount() {
    this.getData();
}

  getData() {
    fetch('http://localhost:8080/admin/getAllTickets', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(results => results.json())
        .then(results => this.setState({ tickets: results }));
}

  render(){
    return (
    <div className="App">
      <h1>Manage Tickets Page</h1>
      {this.state.tickets.length !== 0 ?
        <div className="table-margin ">
          <table className="table table-striped table-dark ">
            <thead className="thead-dark"></thead>
            <tbody>
              {this.state.tickets.map((item, index) =>
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <th>{item.description}</th>
                  <th>{item.department}</th>
                  <th>{item.date}</th>
                  <th>{item.status}</th>
                </tr>)}
            </tbody>
          </table>
        </div>
        : <span className="text-light" style={{ margin: '20px' }}>Here's nothing to show</span>} 
    </div>
    )}
}

export default ManageTickets;