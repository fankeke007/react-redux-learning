import React,{Component} from 'react';

// import store from '../Store.js';

import PropTypes from 'prop-types';


class Summary extends Component{
	render(){
		return (
			<div>Total Count: {this.props.sum}</div>
		);
	}
};

Summary.propTypes = {
	sum:PropTypes.number.isRequired
};


class SummaryContainer extends Component{

	constructor(props,context){
		super(props,context);

		this.onChange = this.onChange.bind(this);
		this.state = this.getOwnState();
	}

	componentDidMount(){
		this.context.store.subscribe(this.onChange);
	}

	componentWillUnMount(){
		this.context.store.unsubscribe(this.onChange);
	}

	onChange(){
		this.setState(this.getOwnState());
	}

	getOwnState(){
		console.log(this.context);
		const state = this.context.store.getState();
		let sum = 0;
		for (const key in state){
			if(state.hasOwnProperty(key)){
				sum += state[key];
			}
		}
		return {sum:sum};
	}

	render(){
		return (
			<Summary sum={this.state.sum}></Summary>
		);
	}
}

SummaryContainer.contextTypes = {
	store:PropTypes.object
};

export default SummaryContainer;
