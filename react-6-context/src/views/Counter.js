import React,{Component} from 'react';
import * as Actions from '../Actions.js';
// import store from '../Store.js';
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

Counter.propTypes = {
	caption:PropTypes.string.isRequired,
	onIncrement:PropTypes.func.isRequired,
	onDecrement:PropTypes.func.isRequired,
	value:PropTypes.number.isRequired
};

class CounterContainer extends Component{
	constructor(props,context){
		super(props,context);
		// super(props,...arguments);

		this.onChange = this.onChange.bind(this);
		this.getOwnState = this.getOwnState.bind(this);
		this.onIncrement = this.onIncrement.bind(this);
		this.onDecrement = this.onDecrement.bind(this);

		this.state = this.getOwnState();

	}

	getOwnState(){
		return {
			value:this.context.store.getState()[this.props.caption]
		}
	}

	shouldComponentUpdate(nextProps,nextState){
		return (nextProps.caption !== this.props.caption) || (nextState.value!==this.state.value);
	}

	componentDidMount(){
		// CounterStore.addChangeListener(this.onChange);
		this.context.store.subscribe(this.onChange);
	}

	componentWillUnmount(){
		// CounterStore.removeChangeListener(this.onChange);
		this.context.store.unsubscribe(this.onChange);
	}

	onChange(){
		// const newCount = CounterStore.getCounterValues()[this.props.caption];
		// this.setState({count:newCount});
		this.setState(this.getOwnState());
	}

	onIncrement(){
		this.context.store.dispatch(Actions.increment(this.props.caption));
	}

	onDecrement(){
		this.context.store.dispatch(Actions.decrement(this.props.caption));
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
CounterContainer.contextTypes = {
	store:PropTypes.object
};
export default CounterContainer;
