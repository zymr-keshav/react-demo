// /* you can run this file directly in sublime if you have create build system with babel-node */
import { createStore } from 'redux'

const reducer = function (state, action) {
    if (action.type === "INC") {
        return state + action.payload;
    }
    if (action.type === "DEC") {
        return state - action.payload;
    }
    return state;
}

let store = createStore(reducer, 0);
// Log the initial state

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
store.subscribe(() => {
    console.log("state changed", store.getState())
});

// Dispatch some actions
store.dispatch({type:"INC", payload:1});
store.dispatch({type:"INC", payload:2});
store.dispatch({type:"DEC", payload:3});
