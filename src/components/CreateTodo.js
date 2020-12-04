import React from "react";
import axios from 'axios';
export default class CreateTodo extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      todo : "",
      date: new Date()
    }
  }
  
  onChangeHandler = (e) => {
    this.setState({
      todo : e.target.value
    })
  }

  onSubmitHandler = (e) => {
    e.preventDefault();

    console.log(this.state.todo);

    const todo = {
      text: this.state.todo,
      date: this.state.date
    }

    axios.post("http://localhost:5000/todos/add", todo)
      .then(res => console.log(res.data));

    this.setState({
      todo : ""
    })
  }

  render() {
    return (
      <div>
        <h2 className="mt-3">Create</h2>
        <form onSubmit={this.onSubmitHandler} className="form-group">
          <input type="text" onChange={this.onChangeHandler} value={this.state.todo} className="form-control mt-4" placeholder="You can write whatever you want here!" />
          <button type="submit"  className="form-control btn btn-success mt-2">
            Add Todo List
            </button>
        </form>
      </div>

    );
  }
}