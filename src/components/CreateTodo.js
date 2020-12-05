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

  componentDidMount = () => {
    
    axios.get("http://localhost:5000/todos/add")
      .then(res => this.setState({
        todo: res.data
      }))

  }

  onChangeHandler = (e) => {
    this.setState({
      todo : e.target.value
    })
  }

  onSubmitHandler = (e) => {
    e.preventDefault();

    console.log(this.state.todo);

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