import React,{Component} from 'react';
import PropTypes from 'prop-types';

// const TodoItem = ({onToggle, onRemove, completed, text}) => {
// 	const checkedProp = completed ? {checked:true} : {};
// 	return (
// 		<li
// 			className="todo-item"
// 			style={{
// 				textDecoration:completed?'line-through':'none'
// 			}}
// 		>
// 			<input className="toggle" type="checkbox" {...checkedProp} readOnly onClick={onToggle} />
// 			<label className="text">{text}</label>
// 			<button className="remove" onClick={onRemove}>x</button>
// 		</li>
// 	)
// }

class TodoItem extends Component{
	constructor(props,context){
		super(...arguments);
		this.handleToggle=this.handleToggle.bind(this);
		this.onToggle=this.onToggle.bind(this);
		this.onRemove=this.onRemove.bind(this);
		this.state={
			checked:props.completed
		};

	}
	handleToggle(event){
		this.setState({
			checked:event.target.checked
		})
	}
	onToggle(){
		this.props.onToggle();
	}
	onRemove(){
		this.props.onRemove();
	}
	render(){
		return (
			<li
				className="todo-item"
				style={{
					textDecoration:this.state.checked?'line-through':'none'
				}}
			>
				<input className="toggle" type="checkbox" readOnly checked={this.state.checked} onChange={this.handleToggle} onClick={this.onToggle} />
				<label className="text">{this.props.text}</label>
				<button className="remove" onClick={this.props.onRemove}>x</button>
			</li>
		)
	}
}

TodoItem.propTypes = {
	onToggle:PropTypes.func.isRequired,
	onRemove:PropTypes.func.isRequired,
	completed:PropTypes.bool.isRequired,
	text:PropTypes.string.isRequired
}

export default TodoItem;
