import React from 'react';
import _ from 'lodash';
import { Form } from 'antd';
import inputCollection from './inputCollection';
import InputFieldDeprecate from './InputFieldDeprecate';
import extractProps from '../utils/extractProps';

const InputField = (props) => {
	const [fieldProps, typeProps, inputFieldProps] = extractProps(props, ['inputType'], ['inputProps']);
	const { inputType } = typeProps;
	const { inputProps } = inputFieldProps;
	const renderInput = _.get(inputCollection, inputType, () => null);

	if (props.formikProps) {
		return <InputFieldDeprecate {...props} />; //TODO: Next to Depretace
	} else {
		return <Form.Item {...fieldProps}>{renderInput(inputProps)}</Form.Item>;
	}
};

export default InputField;
