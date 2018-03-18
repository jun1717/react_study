import { // 名前 が 被っ て しまう ので 別名 で import する
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import * as reducers from './reducers';

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            ...reducers,
            // react-router-redux の Reducer
            router: routerReducer,
        }),
        applyMiddleware(
            logger,
            thunk,
            // react-router-redux の Redux Middleware
            routerMiddleware(history)
        )
    );
}