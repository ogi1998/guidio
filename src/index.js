import React from 'react';
import ReactDOM from 'react-dom/client';

import {Provider} from 'react-redux';
import store from './store/store';

import { ThemeProvider } from '@mui/material';
import theme from './theme';

import { BrowserRouter } from 'react-router-dom';

import './index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
		</BrowserRouter>
	</React.StrictMode>
);