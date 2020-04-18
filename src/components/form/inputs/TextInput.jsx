import React from 'react'
import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	textField: {
		minWidth: 126,
		"& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
			"-webkit-appearance": "none",
			margin: 0
		},
	}
}));

export default function TextInput({ labelName, sm = 6, md = true, required = true, type = 'string' }) {
	const classes = useStyles();

	return (
		<Grid item xs={12} sm={sm} md={md} >
			<TextField fullWidth={true} label={labelName} variant="outlined" required={required} className={classes.textField} type={type} />
		</Grid>
	)
}
