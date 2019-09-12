import React from 'react';
import '../App.css';

class ManageTickets extends React.Component {

  constructor(){
    super();
    this.state = {
      tickets: []
    }
    this.deleteButton = this.deleteButton.bind(this);
    this.updateInProgress = this.updateInProgress.bind(this);
    this.updateToDone = this.updateToDone.bind(this);
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

deleteButton(event) {
  fetch('http://localhost:8080/deleteTicket/' + this.state.tickets[event.target.value].id, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json'
      }
  });
  this.getData();
}

updateInProgress(event) {
  var url = 'http://localhost:8080/changeStatus/' + this.state.tickets[event.target.value].id;
  var data = 'InProgress';
  fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json'
      }
  })
  this.getData();
}

updateToDone(event) {
  event.preventDefault();
  var url = 'http://localhost:8080/changeStatus/' + this.state.tickets[event.target.value].id;
  var data = 'Done';
  fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json'
      }
  })
  this.getData();
}

formatDate(data){
  return data.substring(0,10) + " " + data.substring(11,19);
}

  render(){
    return (
    <div className="App">
      <h1>Manage Tickets Page</h1>
      {this.state.tickets.length !== 0 ?
         <div className="table-margin ">
         <table className="table table-striped table-dark ">
             <thead className="thead-dark">
                 <tr>
                     <th scope="col"></th>
                     <th scope="col"></th>
                     <th scope="col"></th>
                     <th scope="col">#</th>
                     <th scope="col">Description</th>
                     <th scope="col">Department</th>
                     <th scope="col">When</th>
                     <th scope="col">Status</th>
                 </tr>
             </thead>
             <tbody>
              {this.state.tickets.map((item, index) =>
                <tr key={index}>
                  <th><button type="button" value={index} className="btn btn-warning mb-2" onClick={this.updateToDone}>Done</button></th>
                  <th><button type="button" value={index} className="btn btn-warning mb-2" onClick={this.updateInProgress}>In Progress</button></th>
                  <th><button type="button" value={index} className="btn btn-warning mb-2" onClick={this.deleteButton}>Delete</button></th>
                  <th scope='row'>{index + 1}</th>
                  <th>{item.description}</th>
                  <th>{item.department}</th>
                  <th>{this.formatDate(item.date)}</th>
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