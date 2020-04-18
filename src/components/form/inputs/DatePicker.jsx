import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	datePicker: {
		width: '100%',
	},
}));

export default function DatePicker({ labelName, sm = 6, md = true, required = true, setDate = Date.now() }) {
	const [selectedDate, setSelectedDate] = React.useState(new Date(setDate))

	const handleDateChange = date => {
		setSelectedDate(date);
	};

	const classes = useStyles();

	return (
		<Grid item xs={12} sm={sm} md={md} >
			<MuiPickersUtilsProvider utils={DateFnsUtils} >
				<KeyboardDatePicker required={required}
					fullWidth={true}
					margin="dense"
					id="date-picker-dialog"
					label={labelName}
					format="dd/MM/yyyy"
					value={selectedDate}
					onChange={handleDateChange}
					className={classes.datePicker}
					KeyboardButtonProps={{
						"aria-label": "change date"
					}}
				/>
			</MuiPickersUtilsProvider>
		</Grid >
	);
}
