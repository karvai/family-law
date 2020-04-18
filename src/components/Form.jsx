import React from 'react'
import { Typography, Container } from '@material-ui/core';
import FormSteps from './FormSteps';

export default function Form() {

	return (
		<div>
			<Container maxWidth="md">
				<Typography variant="h4" component="h2" style={{ marginTop: "40px" }}>
					Form generator
				</Typography>
				<FormSteps />
			</Container>
		</div>
	)
}
