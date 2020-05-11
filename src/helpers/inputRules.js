// import {  } from "i18n";
import _ from 'lodash';

const rulesCollection = {
	exampleRule: [
		{
			required: true,
			message: 'Username is required!', //TODO: To remove example
		},
	],
	email: [
		{
			type: 'email',
			message: 'The input is not valid E-mail!', // TODO: Put i18n
		},
		{
			required: true,
			message: 'Please input your E-mail!',
		},
	],
	date: [
		{
			type: 'object',
			required: true,
			message: 'Please select time!',
		},
	],
};

const inputRules = (ruleName) => {
	return _.get(rulesCollection, ruleName, []);
};

export default inputRules;
