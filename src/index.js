import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, combineReducers, applyMiddleware } from 'redux'; // 追加
// import logger from 'redux-logger'; // 追加
import { Provider } from 'react-redux'; // 追加
import { ConnectedRouter } from 'react-router-redux'; // 追加
import createBrowserHistory from 'history/createBrowserHistory'; // 追加
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './createStore'; // 追加

// historyインスタンスの生成
const history = createBrowserHistory();

// Store の 生成
const store = createStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
