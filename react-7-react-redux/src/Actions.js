import * as ActionTypes from './ActionTypes.js';
// import AppDispatcher from './AppDispatcher.js';

export const increment = (counterCaption)=>{
	// AppDispatcher.dispatch({
	// 	type:ActionTypes.INCREMENT,
	// 	counterCaption:counterCaption
	// });
	return {
		type:ActionTypes.INCREMENT,
		counterCaption:counterCaption
	}
};
export const decrement = (counterCaption)=>{
	// AppDispatcher.dispatch({
	// 	type:ActionTypes.DECREMENT,
	// 	counterCaption:counterCaption
	// });
	return {
		type:ActionTypes.DECREMENT,
		counterCaption:counterCaption
	}
};
