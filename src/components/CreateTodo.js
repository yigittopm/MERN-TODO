import React from "react";

export default function CreateTodo() {
  return (
      <div>
          <h2 className="mt-3">Create</h2>
        <div className="form-group">
            <input className="form-control mt-4" placeholder="You can write whatever you want here!" />
            <button className="form-control btn btn-success mt-2">
                Add Todo List
            </button>
        </div>
      </div>
    
  );
}
