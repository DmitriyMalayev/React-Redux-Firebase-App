import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
//createStore and applyMiddleware are both functions

import rootReducer from "./store/reducers/rootReducer";
//Only a reducer can update the state. rootReducer contains combineReducers.

import { Provider } from "react-redux";
//Importing the Provider component which can surround our app and pass the store into the application. This will provide the application access to the store.

import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));
/*
Takes in a rootReducer so it has something that can be used to update the store.
The rootReducer contains the combineReducers function

applyMiddleware() 
This function is a second argument of createStore()
It can take in a list of middleware and it turns into a store enhancer so we could add many different middlewares inside. We could also have many different store enhancers and they will enhance the store functionality.

We apply thunk to the middleware as an argument. 
thunk will enhance the functionality of our store. 

Thunk
thunk allows us to return a function inside of our action creators which can then interact with a database.
*/

ReactDOM.render(
	<Provider store={store}>
		<App /> {/* Providing the application access to the store*/}
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();

//createStore can accept one reducer or a rootReducer which is a collection of many reducers. We are able to create multiple reducers for different parts of our app each one handling their own set of actions.
