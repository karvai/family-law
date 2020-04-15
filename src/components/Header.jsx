import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import { Grid } from '@material-ui/core';
import logoImage from "../assets/img/logo.png"
import Menu from './Menu'

function HideOnScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

export default function Header(props) {
	return (
		<React.Fragment>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar style={{ "backgroundColor": "rgba(255, 255, 255, 0.98)" }}>
					<Toolbar style={{ "margin": 3 }}>
						<Container>
							<Grid
								container
								direction="row"
								justify="space-between"
								alignItems="center"
							>
								<div className="logoWrapper"><img src={logoImage} alt="LogoImage" /></div>
								<div className="menu" >
									<Menu />
								</div>
							</Grid>
						</Container>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</React.Fragment>
	);
}
