import React from 'react';
import _ from 'lodash';
import inputsList from './inputsList';

const InputFieldDeprecate = (props) => {
	const { className, errorClassName, formikProps, inputProps, inputType } = props;
	const { name, label } = inputProps;

	const renderInput = _.get(inputsList, inputType, () => null);

	const getErrorFormDisplayProps = () => {
		const { errors, touched } = formikProps;

		return {
			errors: _.get(errors, name),
			touched: _.get(touched, name),
			className: errorClassName,
		};
	};

	return (
		<div className={className}>
			<label htmlFor={name}>{label}</label>
			{renderInput(inputProps)}
			{/* <ErrorFormDisplay {...getErrorFormDisplayProps()} /> //TODO: To put the library*/}
		</div>
	);
};

export default InputFieldDeprecate;
