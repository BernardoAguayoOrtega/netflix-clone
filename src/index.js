//import react
import React from 'react';
//import render method
import { render } from 'react-dom';
//import app component
import { App } from './components/App';
//import serviceWorker
import * as serviceWorker from './serviceWorker';
//import context provider
import { ContextProvider } from './utils/Contex';

//root const
const root = document.getElementById('root');

render(
	<ContextProvider>
		<App />
	</ContextProvider>,
	root,
);

//call the serviceWorker
serviceWorker.register();
