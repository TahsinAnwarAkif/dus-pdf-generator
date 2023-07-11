import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { getMsg } from "../utils/utils";

const useStyles = makeStyles({
	headerAppBar: {
		background: "linear-gradient(45deg, grey 30%, white 90%)",
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		color: "white",
		fontSize: 30,
	},
	headerToolBar: {
		justifyContent: "center",
	},
});

export const Header = () => {
	const classes = useStyles();

	const renderHeader = () => {
		return <Toolbar className={classes.headerToolBar}>{getMsg("header.title")}</Toolbar>;
	};

	return (
		<AppBar className={classes.headerAppBar} component="header">
			{renderHeader()}
		</AppBar>
	);
};
