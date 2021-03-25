const initState = {
  projects: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT": console.log("create project", action.project)
      //action.project is this.state ?? 
  }
  return state;
};

export default projectReducer;

/*
REFERENCE
In the rootReducer file we have combined all of the reducers using combineReducers and assigned it to const rootReducer
All of the information about the projectReducer state will be stored in the project: property on the state

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,

  We're specifying which reducers we want to combine together and what do we want to call each individual reducer
  The auth reducer will update the auth state object
  The project reducer will update the project state object
});
*/
