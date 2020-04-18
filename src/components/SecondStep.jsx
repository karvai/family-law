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
	marginLeft: {
		marginLeft: theme.spacing(2)
	}
}));

export default function SecondStep() {
	const classes = useStyles()

	return (
		<form autoComplete="off" >
			<Grid container>
				<FormControl component="fieldset">
					<FormLabel  component="legend">Select Applicable</FormLabel>
					<div >
						<Button style={{ height: 56 }} size="large" color="primary" variant="outlined">Applicant</Button>
						<Button className={classes.margin} style={{ height: 56 }} size="large" color="primary" variant="outlined"  >Respondent</Button>
					</div>
				</FormControl >
			</Grid>

			<Grid container  >
				<FormControl component="fieldset">
						<FormLabel component="legend">Has the other party ever tried to control/ threatened you by telling you that you could
be deported because of your immigration status?</FormLabel>
					<div >
						<Button style={{ height: 56 }} size="large" color="primary" variant="outlined"   >Yes</Button>
						<Button className={classes.margin} style={{ height: 56 }} size="large" color="primary" variant="outlined"  >No</Button>
						<Button  style={{ height: 56 }} size="large" color="primary" variant="outlined"  >Not applicable</Button>
					</div>
				</FormControl >
			</Grid>

			<Grid container  >
				<FormControl component="fieldset">
					<FormLabel component="legend">Given the scale, how often has the other party tried to prevent you from leaving the
house?</FormLabel>
					<div >
						
						<ButtonGroup className={classes.marginTopBottom} style={{ height: 56 }} variant="outlined" size="large" color="primary">
							<Button>Never</Button>
							<Button>Rarely</Button>
							<Button>Occasionally</Button>
							<Button>Often</Button>
							<Button>Always</Button>
						</ButtonGroup>
					</div>
				</FormControl >
			</Grid>

			<Grid container  >
				<FormControl component="fieldset">
					<FormLabel component="legend">Based on the given scale how often has the other party been trying to keep you away
from seeing your friends or family?</FormLabel>
					<div >
						<ButtonGroup className={classes.marginTopBottom} style={{ height: 56 }} variant="outlined" size="large" color="primary">
							<Button>Never</Button>
							<Button>Rarely</Button>
							<Button>Occasionally</Button>
							<Button>Often</Button>
							<Button>Always</Button>
						</ButtonGroup>
					</div>
				</FormControl >
			</Grid>

			<Grid container  >
				<FormControl component="fieldset">
					<FormLabel component="legend">Based on the given scale, how often has the other party threatened your children?</FormLabel>
					<div >
						<ButtonGroup className={classes.marginTopBottom} style={{ height: 56 }} variant="outlined" size="large" color="primary">
							<Button>Never</Button>
							<Button>Rarely</Button>
							<Button>Occasionally</Button>
							<Button>Often</Button>
							<Button>Always</Button>
						</ButtonGroup>
					</div>
				</FormControl >
			</Grid>

			<Grid container  >
				<FormControl component="fieldset">
					<FormLabel component="legend">Has the other party ever threatened you to take your children away or prevent you
from seeing them?</FormLabel>
					<div >
						<ButtonGroup className={classes.marginTopBottom} style={{ height: 56 }} variant="outlined" size="large" color="primary">
							<Button>Never</Button>
							<Button>Rarely</Button>
							<Button>Occasionally</Button>
							<Button>Often</Button>
							<Button>Always</Button>
						</ButtonGroup>
					</div>
				</FormControl >
			</Grid>

			<Grid container  >
				<FormControl component="fieldset">
					<FormLabel component="legend">Has the police been involved in any arguments between you and the other party?</FormLabel>
					<div >
						<ButtonGroup className={classes.marginTopBottom} style={{ height: 56 }} variant="outlined" size="large" color="primary">
							<Button>Never</Button>
							<Button>Once</Button>
							<Button>More than once</Button>
						</ButtonGroup>
					</div>
				</FormControl >
			</Grid>

			<Grid container  >
				<FormControl component="fieldset">
					<FormLabel component="legend">On the given scale how often has Domestic Violence occurred?</FormLabel>
					<div >
						<ButtonGroup className={classes.marginTopBottom} style={{ height: 56 }} variant="outlined" size="large" color="primary">
							<Button>Never</Button>
							<Button>Rarely</Button>
							<Button>Occasionally</Button>
							<Button>Often</Button>
							<Button>Always</Button>
						</ButtonGroup>
					</div>
				</FormControl >
			</Grid>

			<Grid container>
				<FormControl component="fieldset">
					<FormLabel component="legend">Is this statement applicable to your case: I believe that my children may be at risk of
harm.</FormLabel>
					<div >
						<Button style={{ height: 56 }} size="large" color="primary" variant="outlined">Yes</Button>
						<Button className={classes.margin} style={{ height: 56 }} size="large" color="primary" variant="outlined"  >No</Button>
					</div>
				</FormControl >
			</Grid>

			


		</form>
	)
}

