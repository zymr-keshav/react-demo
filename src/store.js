// /* you can run this file directly in sublime if you have create build system with babel-node */
import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const initialState = { sandwiches: { isShopOpen: true } , myMoney: 130};
const rootReducer = function (state = initialState, action) {
  if (action.type === "WITHDRAW") {
    console.log("inside withdraw", action);
    return {...state, myMoney: state.myMoney - action.amount};
  }
  if (action.type === "MAKE_SANDWICH") {
    console.log("inside MAKE_SANDWICH", action);
    return {...state, person: action.forPerson, sauce: action.secretSauce };
  }
  if (action.type === "APOLOGIZE") {
     console.log("inside APOLOGIZE", action);
    return {...state, person: action.fromPerson, sauce: action.toPerson, message: action.error };
  }
  return state;
};

const payloadReducer = function (state = 0, action) {
  if (action.type === "INC") {
    return state + action.payload;
  }
  if (action.type === "DEC") {
    return state - action.payload;
  }
  return state;
};

// const store = createStore(reducer, 0);
let reducer = combineReducers({root: rootReducer, pay:payloadReducer});

export const store = createStore(reducer, applyMiddleware(thunk, logger));

function fetchSecretSauce() {
  return Promise.resolve('tomato');
}

function makeASandwich(forPerson, secretSauce) {
  return {type: 'MAKE_SANDWICH', forPerson, secretSauce};
}

function apologize(fromPerson, toPerson, error) {
  return {type: 'APOLOGIZE', fromPerson, toPerson, error};
}

function withdrawMoney(amount) {
  return {type: 'WITHDRAW', amount};
}

// Log the initial state

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
store.subscribe(() => {
  console.log("state changed", store.getState());
});

// Dispatch some actions
// store.dispatch({ type: "INC", payload: 1 });
// store.dispatch({ type: "INC", payload: 2 });
// store.dispatch({ type: "DEC", payload: 3 });
store.dispatch(withdrawMoney(10));

// meet thunk 

function makeASandwichWithSecretSauce(forPerson) {

  // Invert control! Return a function that accepts `dispatch` so we can dispatch
  // later. Thunk middleware knows how to turn thunk async actions into actions.

  return function (dispatch) {
    return fetchSecretSauce().then(sauce => dispatch(makeASandwich(forPerson, sauce)), error => dispatch(apologize('The Sandwich Shop', forPerson, error)));
  };
}

function makeSandwichesForEverybody() {
  return function (dispatch, getState) {
     console.log('getState', getState());
    if (!getState().root.sandwiches.isShopOpen) {

      // You don’t have to return Promises, but it’s a handy convention so the caller
      // can always call .then() on async dispatch result.

      return Promise.resolve();
    }

    // We can dispatch both plain object actions and other thunks, which lets us
    // compose the asynchronous actions in a single flow.

    return dispatch(makeASandwichWithSecretSauce('My Grandma')).then(() => Promise.all([
      dispatch(makeASandwichWithSecretSauce('Me')),
      dispatch(makeASandwichWithSecretSauce('My wife'))
    ])).then(() => dispatch(makeASandwichWithSecretSauce('Our kids'))).then(() => dispatch(getState().root.myMoney > 42
      ? withdrawMoney(42)
      : apologize('Me', 'The Sandwich Shop')));
  };
}

store.dispatch(makeASandwichWithSecretSauce('Me')).then( () => {
  console.log('done');
});

store
  .dispatch(makeSandwichesForEverybody())
  .then((res) => { console.log('remaining amount', res) } )
  .catch((err) => { console.log('error', err)} );