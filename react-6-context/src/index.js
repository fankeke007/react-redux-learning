import React from 'react';
import ReactDOM from 'react-dom';
import store from './Store.js';
import Provider from './Provider.js';
// import './index.css';
// import App from './App';
import ControlPanel from './views/ControlPanel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store} >
		<ControlPanel />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
