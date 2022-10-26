import { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import ProjectsContainer from "./ProjectsContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Project from "./Project";


function App() {



  return (
  <div className="overlay">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/projects">
        <ProjectsContainer />
      </Route>
      <Route exact path="/projects/:id">
        <Project/>
      </Route>
    </Switch>
    
    {/* <ProjectsContainer /> */}

  </div>
     
  );
}

export default App;
