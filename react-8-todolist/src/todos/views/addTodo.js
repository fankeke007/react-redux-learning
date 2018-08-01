import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addTodo} from '../actions.js';

class AddTodo extends Component{

	constructor(props,context){
		super(props,context);
		this.onSubmit = this.onSubmit.bind(this);
		// this.refInput = this.refInput.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			value:''
		}
	}

	onSubmit(ev){
		ev.preventDefault();

		// const input = this.input;
		const inputValue = this.state.value;
		// if(!input.value.trim()){
		if(!inputValue.trim()){
			return;
		}

		this.props.onAdd(inputValue);
		this.setState({value:''});
	}

	handleChange(event){
		this.setState({value:event.target.value});
	}

	render(){
		return(
			<div className="add-todo">
				<form onSubmit={this.onSubmit}>
					<input className="new-todo" onChange={this.handleChange} value={this.state.value} />
					<button className="add-btn" type="submit">
						添加
					</button>
				</form>
			</div>
		);
	}
};

AddTodo.propTypes = {
	onAdd:PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch)=>{
	return {
		onAdd:(text)=>{
			dispatch(addTodo(text));
		}
	}
};

export default connect(null,mapDispatchToProps)(AddTodo);
