import React,{Component} from 'react';

// import store from '../Store.js';

import PropTypes from 'prop-types';

import {connect} from 'react-redux';


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

function mapStateToProps(state){
	let sum = 0;
	for (const key in state){
		if(state.hasOwnProperty(key)){
			sum += state[key];
		}
	}
	return {sum:sum};
}
export default connect(mapStateToProps)(Summary);
