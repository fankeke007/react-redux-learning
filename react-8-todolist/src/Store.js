import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';

// import Pref from 'react-addons-perf';

const win = window;
// win.Pref = Pref;

const reducer = combineReducers({
	todos:todoReducer,
	filter:filterReducer
});

const middlewares = [];
if(process.env.NODE_ENV !== 'production'){
	middlewares.push(require('redux-immutable-state-invariant').default())
}

const storeEnhancers = compose(
	applyMiddleware(...middlewares),
	(win && win.devToolsExtension) ? win.devToolsExtension():(f)=>f,
)

export default createStore(reducer,{},storeEnhancers);

