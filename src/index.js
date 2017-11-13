import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers/'
// import todoApp from './reducers' // trial 2
import registerServiceWorker from './registerServiceWorker'

registerServiceWorker();

const store = createStore(reducer);

store.subscribe(() => {
    console.log("state changed", store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);