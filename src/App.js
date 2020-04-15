import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Footer from './components/Footer';

const THEME = createMuiTheme({
	typography: {
		"fontFamily": "\"Montserrat\", sans-serif",
		"fontSize": 14,
		"fontWeightLight": 300,
		"fontWeightRegular": 400,
		"fontWeightMedium": 500
	}
})

function App() {
	return (
		<div className="App">
			<MuiThemeProvider theme={THEME}>
				<Header />
				<div className="content">
					<Home />
				</div>
				<Footer />
			</MuiThemeProvider>
		</div>
	);
}

export default App;
