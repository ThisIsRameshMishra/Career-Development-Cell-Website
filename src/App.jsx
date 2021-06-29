import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import "./App.css";
import Error from './Error';
import Menu from "./Menu";
import Services from './Services';
import Company from './Companies/Company';
import Cdc from "./CDC Ofiicial/Cdc";
import Volunteer from "./Volunteer/Volunteer";
import Student from "./Students/Student";
const App = () => {
  const Name=()=>{
    return 
  };
  return (
    <>
    <Menu/>
    <Switch>
      <Route  exact path="/" component={Cdc}/>
      <Route exact path="/company" component={Company}/>
      <Route exact path="/volunteer" component={Volunteer}/>
      <Route exact path="/student" component={Student}/>
      
      <Redirect to="/"/>
    </Switch>
    
    </>
  );
};

export default App;
