import React,{Component} from 'react';
import * as Actions from '../Actions.js';
import store from '../Store.js';
import Proptypes from 'prop-types'

const buttonStyle = {
	margin:'10px'
};

class Counter extends Component{
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
		const {caption} = this.props;
		const value = this.state.value;
		return (
			<div>
				<button sstyle={buttonStyle} onClick={this.onIncrement}>+</button>
				<button sstyle={buttonStyle} onClick={this.onDecrement}>-</button>
				<span>{caption} count : {value}</span>
			</div>
		);
	}
}

Counter.propTypes = {
	caption:Proptypes.string.isRequired
};
export default Counter;
