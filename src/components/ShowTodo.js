import React from 'react';

export default function ShowTodo(){
  return(
    <div className="">
      <h2 className="mt-3">Todo list</h2>
      <ul className="list-group mt-4">
        <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-info">
          <h4>You should learn MERN-STACK</h4>
          <div className="btn-group">
            <button className="btn btn-warning btn-pill mr-1">Edit</button>
            <button className="btn btn-danger btn-pill">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  )
}