import React from "react";
import { Helmet } from "react-helmet";

export default function MetaData() {
	return (
		<Helmet>
			<meta charSet="utf-8" />
			<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			<title>Family Law</title>
			<meta name="description" content="This application allows to generate document."></meta>
			<link rel="canonical" href="" />
		</Helmet>
	)
}