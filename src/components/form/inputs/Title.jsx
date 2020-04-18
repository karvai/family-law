import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { InputLabel, Grid } from '@material-ui/core';

export default function Title({ sm = 6, md = true }) {
	const [title, setTitle] = React.useState('');

	const handleChange = (event) => {
		setTitle(event.target.value);
	};

	return (
		<Grid item xs={12} sm={sm} >
			<FormControl variant="outlined" fullWidth={true} >
				<InputLabel required>Title</InputLabel>
				<Select
					value={title}
					onChange={handleChange}
					label="Title"
				>
					<MenuItem value="Mr.">Mr.</MenuItem>
					<MenuItem value="Mrs.">Mrs.</MenuItem>
					<MenuItem value="Miss">Miss</MenuItem>
				</Select>
			</FormControl>
		</Grid>
	)
}
