import React,{Component} from 'react';
import * as Actions from '../Actions.js';
import store from '../Store.js';
import PropTypes from 'prop-types'

const buttonStyle = {
	margin:'10px'
};

class Counter extends Component{
	render(){
		const {caption,onIncrement,onDecrement,value} = this.props;

		return(
			<div>
		       <button style={buttonStyle} onClick={onIncrement}>+</button>
		       <button style={buttonStyle} onClick={onDecrement}>-</button>
		       <span>{caption} count: {value}</span>
		    </div>
		)
	}
}

// 无状态组件函数版
// function Counter(props){
// //以下也可以直接在参数中结构Counter({caption,onIncrement,onDecrement,value})
// 	const {caption,onIncrement,onDecrement,value} = props;
// 	return(
// 		<div>
// 	       <button style={buttonStyle} onClick={onIncrement}>+</button>
// 	       <button style={buttonStyle} onClick={onDecrement}>-</button>
// 	       <span>{caption} count: {value}</span>
// 	    </div>
// 	)
// }


Counter.propTypes = {
	caption:PropTypes.string.isRequired,
	onIncrement:PropTypes.func.isRequired,
	onDecrement:PropTypes.func.isRequired,
	value:PropTypes.number.isRequired
};

class CounterContainer extends Component{
	constructor(props){
		super(props);

		this.onChange = this.onChange.bind(this);
		this.getOwnState = this.getOwnState.bind(this);
		this.onIncrement = this.onIncrement.bind(this);
		this.onDecrement = this.onDecrement.bind(this);

		this.state = this.getOwnState();

	}

	getOwnState(){
		return {
			value:store.getState()[this.props.caption]
		}
	}

	shouldComponentUpdate(nextProps,nextState){
		return (nextProps.caption !== this.props.caption) || (nextState.value!==this.state.value);
	}

	componentDidMount(){
		// CounterStore.addChangeListener(this.onChange);
		store.subscribe(this.onChange);
	}

	componentWillUnmount(){
		// CounterStore.removeChangeListener(this.onChange);
		store.unsubscribe(this.onChange);
	}

	onChange(){
		// const newCount = CounterStore.getCounterValues()[this.props.caption];
		// this.setState({count:newCount});
		this.setState(this.getOwnState());
	}

	onIncrement(){
		store.dispatch(Actions.increment(this.props.caption));
	}

	onDecrement(){
		store.dispatch(Actions.decrement(this.props.caption));
	}

	render(){
		return (
			<Counter caption={this.props.caption}
				onIncrement={this.onIncrement}
				onDecrement={this.onDecrement}
				value={this.state.value} />
		);
	}
}

CounterContainer.propTypes = {
	caption:PropTypes.string.isRequired
};
export default CounterContainer;
