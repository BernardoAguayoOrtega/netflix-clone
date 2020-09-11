//import react
import React from 'react';
//import render method
import { render } from 'react-dom';
//import app component
import { App } from './components/App';
//import serviceWorker
import * as serviceWorker from './serviceWorker';

//root const
const root = document.getElementById('root');

render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	root,
);

//call the serviceWorker
serviceWorker.register();
