export const createProject = (project) => {   //works in conjunction with CreateProject.js
	return (dispatch, getState) => {
        //Make async call to DB
		dispatch({ type: "CREATE_PROJECT", project: project });
		//dispatching a project and it's taken in by the projectReducer
	};
};

/*
export const createProject = (project) => {     WITH THUNK
	return (dispatch, getState) => {};
};
dispatch => Dispatches an action to the reducer. When we first call an action creator inside of a dispatch method from our component we're returning a function and pausing the dispatch because we're not returning an action anymore we are returning a function. 
We first make an async call to the DB and then proceed with dispatch. 

getState => Used if we need to retrieve the state


 export const createProject = (project) => {   BEFORE THUNK
 	return {
 		type: "ADD_PROJECT",
 		project: project,
 	};
 };
*/
