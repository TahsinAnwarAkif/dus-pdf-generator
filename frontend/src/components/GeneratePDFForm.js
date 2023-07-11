import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { getMsg, isNotEmpty } from "../utils/utils";
import { Autocomplete } from "@mui/material";
import { Button, TextField, Grid } from "@mui/material";

const useStyles = makeStyles({
	form: {
		position: "absolute !important",
		top: 220,
		display: "inline-grid",
	},
	textField: {
		marginBottom: "18px !important",
		width: 600,
	},
	submitButton: {
		width: 100,
		left: 250,
	},
});

export const GeneratePDFForm = () => {
	const [form, setForm] = useState("");
	const [job, setJob] = useState("");
	const [municipality, setMunicipality] = useState("");
	const [submitEnabled, setSubmitEnabled] = useState(false);

	const submitHandler = () => {};

	useEffect(() => {
		setSubmitEnabled(isNotEmpty(form) && isNotEmpty(job) && isNotEmpty(municipality));
	}, [form, job, municipality]);

	const classes = useStyles();
	const renderGenPDFForm = () => {
		return (
			<Grid container direction="row" justifyContent="center" alignItems="center">
				<form className={classes.form}>
					<Autocomplete
						id="selectForm"
						options={["cat", "dog", "turtle"]}
						renderInput={(params) => <TextField {...params} label={getMsg("select.form.field")} />}
						className={classes.textField}
						value={form || ""}
						onChange={(e) => {
							setForm(e.target.textContent);
						}}
						isOptionEqualToValue={(option) => ["cat", "dog", "turtle"].includes(option)}
						disablePortal
						disableClearable
					/>

					<TextField
						id="dusJob"
						label={getMsg("dus.job.field")}
						value={job}
						onChange={(e) => {
							setJob(e.target.value);
						}}
						variant="outlined"
						className={classes.textField}
					/>

					<TextField
						id="municipality"
						label={getMsg("municipality.field")}
						value={municipality}
						onChange={(e) => {
							setMunicipality(e.target.value);
						}}
						variant="outlined"
						className={classes.textField}
					/>

					<Button onClick={submitHandler} variant="contained" color="primary" className={classes.submitButton} disabled={!submitEnabled}>
						{getMsg("generate.btn")}
					</Button>
				</form>
			</Grid>
		);
	};

	return renderGenPDFForm();
};
