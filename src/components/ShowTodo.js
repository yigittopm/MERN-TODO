import React from 'react';
import axios from 'axios';
export default class ShowTodo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount = () => {
    axios.get("http://localhost:5000/todos")
      .then(response => this.setState({ todos: response.data }))
  }


  render() {
    return (
      <div className="">
        <h2 className="mt-3">Todo list</h2>
        <ul className="list-group mt-4">
          {
            this.state.todos.map((item) =>
              <li key={item.date} className="list-group-item d-flex justify-content-between align-items-center list-group-item-info">
                <h4>{item.text}</h4>
                <h6>{item.date}</h6>
                <div className="btn-group">
                  <button className="btn btn-warning btn-pill mr-1">Edit</button>
                  <button className="btn btn-danger btn-pill">Delete</button>
                </div>
              </li>
            )
          }
        </ul>
      </div>
    )
  }

}