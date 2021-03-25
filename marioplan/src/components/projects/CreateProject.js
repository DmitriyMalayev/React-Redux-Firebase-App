import React, { Component } from "react";
import { connect } from "react-redux"; //Connecting to the redux store. Gluing react and redux. ??
import { createProject } from "../../store/actions/projectActions"; //importing createProject function

class CreateProject extends Component {
  state = {
    title: "",
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
    //passed in to createProject: (project)
    //Becomes createProject: (this.state) => dispatch(createProject(this.state));
  };
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id="title" onChange={this.handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field">
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="content">Project Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  //taking in the dispatch method so we can call it
  return {
    createProject: (project) => dispatch(createProject(project)),
    /*
    Specifying the property we want to add to the props
    When we write props.createProject in the component this function will be called and it will run createProject pass in the project, perform a dispatch and call the action creator createProject that we have imported. The createProject function runs and returns the function from projectActions.js. It makes the async call and then continues on to make the dispatch of the action.
    It takes in an an individual project and then it going to dispatch an action creator with createProject passed in. 
    */
  };
};

export default connect(null, mapDispatchToProps)(CreateProject);
//connect() returns a higher order function
//If we don't have a first parameter of mapStateToProps we have to write null
