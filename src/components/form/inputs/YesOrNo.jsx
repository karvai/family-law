import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import { FormLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
	},
	marginTopBottom: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2)
	},
	marginLeft: {
		marginLeft: theme.spacing(2)
	}
}));

export default function YesOrNo({ question, extraComponent }) {
	const classes = useStyles()

	let [showLanguage, setShowLanguage] = React.useState(false)
	let [noVariant, setNoVariant] = React.useState('outlined')
	let [yesVariant, setYesVariant] = React.useState('outlined')

	let showLanguages = () => {
		setYesVariant('contained')
		setNoVariant('outlined')
		setShowLanguage(true)
	}

	let removeLanguages = () => {
		setNoVariant('contained')
		setYesVariant('outlined')
		setShowLanguage(false)
	}

	return (
		<Grid container spacing={2} className={classes.marginTopBottom} >
			<FormControl component="fieldset">
				<FormLabel className={classes.margin} component="legend">{question}</FormLabel>
				<div className={classes.margin}>
					{(showLanguage && extraComponent)}
				{(!showLanguage && <Button style={{ height: 56 }} size="large" color="primary" variant={yesVariant} onClick={showLanguages} >Yes</Button>)}
					<Button className={classes.marginLeft} style={{ height: 56 }} size="large" color="primary" variant={noVariant} onClick={removeLanguages} >No</Button>
				</div>
			</FormControl >
		</Grid>
	)
}
