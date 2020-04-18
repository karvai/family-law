import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from "@material-ui/core/Chip";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: -10,
		marginBottom: -10,
	},

}));

const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: 300,
		}
	}
};

const nationalities = [
	'British',
	'Irish',
	'Afghan',
	'Albanian',
	'Algerian',
	'American',
	'Andorran',
	'Angolan',
	'Antiguans',
	'Argentinean',
	'Armenian',
	'Australian',
	'Austrian',
	'Azerbaijani',
	'Bahamian',
	'Bahraini',
	'Bangladeshi',
	'Barbadian',
	'Barbudans',
	'Batswana',
	'Belarusian',
	'Belgian',
	'Belizean',
	'Beninese',
	'Bhutanese',
	'Bolivian',
	'Bosnian',
	'Brazilian',
	'Bruneian',
	'Bulgarian',
	'Burkinabe',
	'Burmese',
	'Burundian',
	'Cambodian',
	'Cameroonian',
	'Canadian',
	'Cape Verdean',
	'Central African',
	'Chadian',
	'Chilean',
	'Chinese',
	'Colombian',
	'Comoran',
	'Congolese',
	'Costa Rican',
	'Croatian',
	'Cuban',
	'Cypriot',
	'Czech',
	'Danish',
	'Djibouti',
	'Dominican',
	'Dutch',
	'East Timorese',
	'Ecuadorean',
	'Egyptian',
	'Emirian',
	'Equatorial Guinean',
	'Eritrean',
	'Estonian',
	'Ethiopian',
	'Fijian',
	'Filipino',
	'Finnish',
	'French',
	'Gabonese',
	'Gambian',
	'Georgian',
	'German',
	'Ghanaian',
	'Greek',
	'Grenadian',
	'Guatemalan',
	'Guinea-Bissauan',
	'Guinean',
	'Guyanese',
	'Haitian',
	'Herzegovinian',
	'Honduran',
	'Hungarian',
	'I-Kiribati',
	'Icelander',
	'Indian',
	'Indonesian',
	'Iranian',
	'Iraqi',
	'Israeli',
	'Italian',
	'Ivorian',
	'Jamaican',
	'Japanese',
	'Jordanian',
	'Kazakhstani',
	'Kenyan',
	'Kittian and Nevisian',
	'Kuwaiti',
	'Kyrgyz',
	'Laotian',
	'Latvian',
	'Lebanese',
	'Liberian',
	'Libyan',
	'Liechtensteiner',
	'Lithuanian',
	'Luxembourger',
	'Macedonian',
	'Malagasy',
	'Malawian',
	'Malaysian',
	'Maldivan',
	'Malian',
	'Maltese',
	'Marshallese',
	'Mauritanian',
	'Mauritian',
	'Mexican',
	'Micronesian',
	'Moldovan',
	'Monacan',
	'Mongolian',
	'Moroccan',
	'Mosotho',
	'Motswana',
	'Mozambican',
	'Namibian',
	'Nauruan',
	'Nepalese',
	'New Zealander',
	'Nicaraguan',
	'Nigerian',
	'Nigerien',
	'North Korean',
	'Northern Irish',
	'Norwegian',
	'Omani',
	'Pakistani',
	'Palauan',
	'Panamanian',
	'Papua New Guinean',
	'Paraguayan',
	'Peruvian',
	'Polish',
	'Portuguese',
	'Qatari',
	'Romanian',
	'Russian',
	'Rwandan',
	'Saint Lucian',
	'Salvadoran',
	'Samoan',
	'San Marinese',
	'Sao Tomean',
	'Saudi',
	'Senegalese',
	'Serbian',
	'Seychellois',
	'Sierra Leonean',
	'Singaporean',
	'Slovakian',
	'Slovenian',
	'Solomon Islander',
	'Somali',
	'South African',
	'South Korean',
	'Spanish',
	'Sri Lankan',
	'Sudanese',
	'Surinamer',
	'Swazi',
	'Swedish',
	'Swiss',
	'Syrian',
	'Taiwanese',
	'Tajik',
	'Tanzanian',
	'Thai',
	'Togolese',
	'Tongan',
	'Trinidadian/Tobagonian',
	'Tunisian',
	'Turkish',
	'Tuvaluan',
	'Ugandan',
	'Ukrainian',
	'Uruguayan',
	'Uzbekistani',
	'Venezuelan',
	'Vietnamese',
	'Yemenite',
	'Zambian',
	'Zimbabwean',
];


export default function Nationality({ sm = 6, md = true, }) {
	const classes = useStyles();

	const [nationalityValue, setNationality] = React.useState([]);

	const handleNationalityChange = (event) => {
		setNationality(event.target.value);
	};

	return (
		<Grid item xs={12} sm={sm} md={md}>
			<FormControl fullWidth={true} variant="outlined" 	>
				<InputLabel required>Nationality</InputLabel>
				<Select
					multiple
					label="Nationality"
					value={nationalityValue}
					onChange={handleNationalityChange}
					renderValue={selected => (
						<div>
							{selected.map(value => (
								<Chip key={value} label={value} className={classes.root} />
							))}
						</div>
					)}
					MenuProps={MenuProps}
				>
					{nationalities.map(nat => (
						<MenuItem key={nat} value={nat} >
							{nat}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Grid >
	)
}
