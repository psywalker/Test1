import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from "redux";
import registerServiceWorker from './registerServiceWorker';
import { reducer as form } from "redux-form";
const todos = (state = [], action) => {

}
const reducer = combineReducers({ form });
const store = createStore(reducer)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
