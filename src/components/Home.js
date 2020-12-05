import React from "react";
export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
      <div className="container mt-5">
        <h2>Welcome</h2>
        <h3 className="mt-3">It's great to see you, you can add as many todo as you want!</h3>
      </div>
    );
  }

}
