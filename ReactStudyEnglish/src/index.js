// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import appReducers from "./Reducer/index";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// middware:thunk
// var nonIterableSpread = require("./nonIterableSpread");

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
/* redux hỗ trợ thêm một function là createStore,
với những combined reducer đã tạo trc để tạo ra một store
redux store dc khai báo là middleware, thành phần này có nhiệm vụ giữa khoảnh khắc dispath action 
và payload đến dc vs reducer
*/
const store = createStore(
    appReducers,
    composeEnhancers(
        applyMiddleware(thunk),
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();

export default store;
