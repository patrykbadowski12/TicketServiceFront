import React from 'react';
import '../App.css';

class Basic extends React.Component {

  constructor() {
    super();
    this.state = {
      listTickets : [],

    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    var url = 'http://localhost:8080/getAllTickets';
    fetch(url, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(results => results.json())
    .then(results => this.setState({ listTickets: results }));
}

  render() {
    return (
      <div className="App">
        {this.state.listTickets.length !== 0 ?
        <div className="table-margin ">
          <table className="table table-striped table-dark ">
            <thead className="thead-dark"></thead>
            <tbody>
              {this.state.listTickets.map((item, index) =>
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
        : <span className="text-light" style={{ margin: '20px' }}>It's nothing to show</span>} 
    </div>
    )
  }
}

export default Basic;