import React from "react";

import Navbar from './components/Navbar';
import ShowTodo from "./components/ShowTodo";
import CreateTodo from "./components/CreateTodo";
import Home from "./components/Home";

import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar/>
        <div clasName="content">
          <Switch>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/create">
              <CreateTodo />
            </Route>

            <Route path="/show">
              <ShowTodo />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
