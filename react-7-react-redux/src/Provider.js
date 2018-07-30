import {Component} from 'react';
import PropTypes from 'prop-types';

class Provider extends Component {
	getChildContext(){
		return {
			store:this.props.store
		};
	}

	render(){
		/*每个组件的props中都有一个children属性，代表的是子组件*/
		return this.props.children;
	}
}

/*为了让react 认可Provider为一个Context提供者，还需设置如下*/
Provider.childContextTypes = {
	store:PropTypes.object
};

Provider.propTypes = {
	store:PropTypes.object.isRequired
};

export default Provider;
