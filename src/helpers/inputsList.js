import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import {
	Input,
	Radio,
	Select,
	Cascader,
	DatePicker,
	InputNumber,
	TreeSelect,
	Switch,
	Checkbox,
	Slider,
} from 'formik-antd';
/**
 * TODO: It will be Deprecable
 */

const inputsList = {
	Input: function (props) {
		return <Input {...props} />;
	},
	TextArea: function (props) {
		return <Input.TextArea {...props} />;
	},
	Search: function (props) {
		return <Input.Search {...props} />;
	},
	Password: function (props) {
		return <Input.Password {...props} />;
	},
	Radio: function (props) {
		return <Radio {...props} />;
	},
	Select: function (props) {
		//TODO: remove options element to add the props correctly
		const { label, name, placeholder, optionFilterProp, disabled, options, onChange } = props;

		const getSelectProps = () => ({
			label,
			name,
			placeholder,
			optionFilterProp,
			disabled,
			onChange,
		});

		const renderOptions = () => {
			let dataToRender = null;

			if (!_.isEmpty(options)) {
				dataToRender = options.map((item, index) => {
					return (
						<Select.Option key={index} value={item}>
							{item}
						</Select.Option>
					);
				});
			}

			return dataToRender;
		};

		return <Select {...getSelectProps()}>{renderOptions()}</Select>;
	},
	Cascader: function (props) {
		return <Cascader {...props} />;
	},
	DatePicker: function (props) {
		return <DatePicker {...props} />;
	},
	InputNumber: function (props) {
		return <InputNumber {...props} />;
	},
	TreeSelect: function (props) {
		return <TreeSelect {...props} />;
	},
	Switch: function (props) {
		return <Switch {...props} />;
	},
	Checkbox: function (props) {
		return <Checkbox {...props} />;
	},
	Slider: function (props) {
		return <Slider {...props} />;
	},
};

export default inputsList;
