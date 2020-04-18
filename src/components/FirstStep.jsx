import React from 'react'
import TextInput from './form/inputs/TextInput';
import Nationality from './form/inputs/Nationality';
import DatePicker from './form/inputs/DatePicker';
import Grid from '@material-ui/core/Grid';
import Title from './form/inputs/Title';
import LanguageSelector from './form/inputs/LanguageSelector';
import YesOrNo from './form/inputs/YesOrNo'
import TextField  from '@material-ui/core/TextField';

export default function FirstStep() {
	return (
		<form autoComplete="off" >
			<Grid container spacing={2} >
				<Title sm={2} />
				<TextInput labelName="First Name" sm={5} />
				<TextInput labelName="Last Name" sm={5} />
			</Grid>

			<Grid container spacing={2}>
				<DatePicker labelName="Date of Birth" setDate="01-01-1990" sm={4} md={2} />
				<Nationality sm={8} />
				<TextInput labelName="Email Address" />
				<TextInput labelName="Phone Number" required={false} type="number" />
			</Grid>

			<Grid container spacing={2}>
				<TextInput labelName="Address" sm={5} md={6} />
				<TextInput labelName="City" sm={true} />
				<TextInput labelName="Postcode" sm={3} md={2} />
			</Grid>

			<Grid container spacing={2} >
				<TextInput labelName="Court Case Number" sm={4} md={3} />
				<TextInput labelName="Court Name" sm={true} />
				<DatePicker labelName="Date of Hearing" sm={4} md={2} setDate={Date.now() + (7 * 86400000)} />
			</Grid>



			<YesOrNo question="I would like the court to arrange for an free interpreter for me at future hearings *" extraComponent={<LanguageSelector />} />
			<YesOrNo question="Do you have any disability you may need additional assistance with? *" extraComponent={
				<TextField  label="Disability" variant="outlined" multiline required helperText="Insert needed facilities" style={{maxWidth: 200}} />
			} />


		</form>
	)
}

