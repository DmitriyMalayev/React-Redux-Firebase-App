import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
//importing both reducers to combine them in this file

import { combineReducers } from "redux";
//importing {combineReducers} from the redux library. It is a function that will combine our reducers into one.


const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  //We're specifying which reducers we want to combine together and what do we want to call each individual reducer
  //The auth reducer will update the auth state object
  //The project reducer will update the project state object
});

export default rootReducer;

// the key name will be the data property on the state object
