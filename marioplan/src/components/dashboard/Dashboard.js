import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import { connect } from "react-redux";
//connect is a higher order component and library that glues redux and react

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { projects } = this.props; //Destructuring

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
            {/* passing projects down as props */}
            {/* connecting the redux component to the redux store  */}
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
  };
};

export default connect(mapStateToProps)(Dashboard);

/*
mapStateToProps 
  Takes in the state of our store and it returns an object that represents which properties are attached to the props of this component. 
  Attaching to the projects property inside of the props of this component.
  We can access them inside of this component via  props.projects 

REFERENCE 

! rootReducer.js
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,    //project part
});

! projectsReducer.js
const initState = {
  projects: [     //projects part
    {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
    {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
  ]
}

connect()
We pass in mapStateToProps function into connect() so it knows what data to get from the store. 
We're mapping that to our props object. Makes props.projects available. 

*/
