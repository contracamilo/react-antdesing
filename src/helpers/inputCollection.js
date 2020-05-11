import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import SelectConfiguration from './SelectConfiguration';
import { Button, Cascader, Checkbox, DatePicker, Input, InputNumber, Radio, Slider, Switch, TreeSelect } from 'antd';
import extractProps from '../utils/extractProps';

const inputCollection = {
	Cascader: function (props) {
		return <Cascader {...props} />;
	},
	Button: function (props) {
		const [fieldProps, buttonProps] = extractProps(props, ['buttonMessage']);
		const { buttonMessage } = buttonProps;
		return <Button {...fieldProps}>{buttonMessage}</Button>;
	},
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
		return <SelectConfiguration {...props} />;
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

export default inputCollection;
