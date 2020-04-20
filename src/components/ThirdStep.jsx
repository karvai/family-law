import React from 'react'
import TextInput from './form/inputs/TextInput';
import Nationality from './form/inputs/Nationality';
import DatePicker from './form/inputs/DatePicker';
import Grid from '@material-ui/core/Grid';
import LanguageSelector from './form/inputs/LanguageSelector';
import YesOrNo from './form/inputs/YesOrNo'
import TextField  from '@material-ui/core/TextField';
import  FormControl  from '@material-ui/core/FormControl';
import { FormLabel, ButtonGroup } from '@material-ui/core';
import Button  from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(2),
	},
	marginTopBottom: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2)
	},
	marginTop: {
		marginTop: theme.spacing(2)
	}
}));

export default function ThirdStep() {
	const classes = useStyles()

	return (
		<form autoComplete="off" >
			<Grid container>
				<FormControl fullWidth="true" component="fieldset">
					<FormLabel component="legend">The date your relationship has begun.</FormLabel>
					<div >
						<DatePicker sm={4} md={2} />
					</div>
				</FormControl >
			</Grid>

			<Grid container className={classes.marginTop} >
				<FormControl component="fieldset">
					<FormLabel component="legend">The formalisation level of your relationship</FormLabel>
					<div >
						<ButtonGroup className={classes.marginTopBottom} style={{ height: 56 }} variant="outlined" size="large" color="primary">
							<Button>not formalised</Button>
							<Button>civil partnership</Button>
							<Button>married</Button>
						</ButtonGroup>
					</div>
				</FormControl >
			</Grid>

			<Grid container>
				<FormControl fullWidth="true" component="fieldset">
					<FormLabel component="legend">Date of formalisation of the relationship</FormLabel>
					<div >
						<DatePicker sm={4} md={2} />
					</div>
				</FormControl >
			</Grid>

			<Grid container className={classes.marginTop}>
				<FormControl fullWidth="true" component="fieldset">
					<FormLabel component="legend">When your relationship ended?</FormLabel>
					<div >
						<DatePicker sm={4} md={2} />
					</div>
				</FormControl >
			</Grid>

			<Grid container className={classes.marginTop}>
				<FormControl fullWidth="true" component="fieldset">
					<FormLabel component="legend">How many children do you have?</FormLabel>
					<TextField className={classes.marginTopBottom} label="Children" variant="outlined" type="number" required style={{ maxWidth: 130}} />
				</FormControl >
			</Grid>

			


		</form>
	)
}

