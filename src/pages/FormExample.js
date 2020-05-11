import React, { useEffect } from 'react';
import _ from 'lodash';
import { Form } from 'antd';
import InputField from '../helpers/InputField';
import inputRules from '../helpers/inputRules';

const FormExample = (props) => {
	const [form] = Form.useForm();

	const handleSubmit = () => {
		console.log('🐞 form', form);
	};

	const getForm = () => {
		return {
			name: 'someFormName',
			form,
		};
	};

	const getInputSelect = (inputType) => {
		return {
			inputType,
			hasFeedback: true,
			name: 'select',
			label: 'Select',
			rules: inputRules('exampleRule'),
			inputProps: {
				placeholder: 'Elige',
				options: ['Primero', 'Segundo'],
			},
		};
	};

	const getInputSelectGroup = (inputType) => {
		return {
			inputType,
			hasFeedback: true,
			name: 'selectGroup',
			label: 'Select Group',
			rules: inputRules('exampleRule'),
			inputProps: {
				placeholder: 'Elige',
				options: {
					Frutas: ['Manzanas', 'Peras'],
					Vegetales: ['Tomate', 'Cebolla'],
					Carnes: ['Res', 'Pollo', 'Pescado'],
				},
			},
		};
	};

	const getButtonSubmit = (inputType) => {
		return {
			inputType,
			inputProps: {
				type: 'primary',
				buttonMessage: 'Submit',
				htmlType: 'submit',
				onClick: handleSubmit,
			},
		};
	};

	return (
		<Form {...getForm()}>
			<InputField {...getInputSelect('Select')} />
			<InputField {...getInputSelectGroup('Select')} />
			<InputField {...getButtonSubmit('Button')} />
		</Form>
	);
};

export default FormExample;
