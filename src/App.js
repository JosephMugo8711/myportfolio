import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import ProjectDetail from "./components/ProjectDetail";
import NewProject from "./components/NewProject";

function App() {
    
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route exact path="/projects">
                    <ProjectList />
                </Route>
                <Route path="/projects/new">
                    <NewProject />
                </Route>
                <Route path="/projects/:id">
                    <ProjectDetail />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
        </div>
    );
}

export default App;

