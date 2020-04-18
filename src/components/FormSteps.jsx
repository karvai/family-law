import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FirstStep from './FirstStep';
import Grid from '@material-ui/core/Grid';
import SecondStep from './SecondStep';


const useStyles = makeStyles(theme => ({
	button: {
		marginRight: theme.spacing(1)
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1)
	},
	stepper: {
		paddingLeft: 0,
		paddingRight: 0
	},
}));

function getSteps() {
	return ["Personal details", "Abuse", "Relationship", "Generated document"];
}

function getStepContent(step) {
	switch (step) {
		case 0:
			return 
		case 1:
			return <FirstStep />// <SecondStep />
		case 2:
			return 
		case 3:
			return "This is the bit I really care about!";
		default:
			return "Unknown step";
	}
}

export default function FormSteps() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	return (
		<div >
			<Stepper alternativeLabel activeStep={activeStep} className={classes.stepper}>
				{steps.map(label => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<div>
				{activeStep === steps.length ? (
					<div>
						<Typography className={classes.instructions}>
							All steps completed - you&apos;re finished
            </Typography>

					</div>
				) : (
						<div>
							{getStepContent(activeStep)}
							<Grid container
								direction="row"
								justify="center"
								alignItems="center"
							>
								<Button
									disabled={activeStep === 0}
									onClick={handleBack}
									className={classes.button}
								>
									Back
								</Button>
								<Button
									variant="contained"
									color="primary"
									onClick={handleNext}
									className={classes.button}
								>
									{activeStep === steps.length - 1 ? "Finish" : "Next"}
								</Button>
							</Grid>

						</div>
					)}
			</div>
		</div>
	);
}