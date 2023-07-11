import { messages } from "./constants";

export const getMsg = (msgKey, language = "en") => {
	return messages[language][msgKey];
};

export const isNotEmpty = (str) => {
	return !isEmpty(str);
};

export const isEmpty = (str) => {
	return !str || str.trim() === "";
};
