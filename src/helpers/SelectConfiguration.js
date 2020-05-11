import React from 'react';
import _ from 'lodash';
import extractProps from '../utils/extractProps';
import { Select } from 'antd';

/**
 * @param {*} props:
 *  options: ['example1','example2','example3']
 *  options: {
 *              groupName1:['example1','example2','example3'],
 *              groupName1:['example1','example2','example3'],
 *           }
 */
const SelectConfiguration = (props) => {
	const { Option, OptGroup } = Select;
	const specialProperties = ['options']; //To add new props
	const [basicProps, specialProps] = extractProps(props, specialProperties);
	const { options } = specialProps;

	const renderOptions = (choices, groupName = 'noGroup') => {
		let dataToRender = null;

		if (_.isArray(choices)) {
			dataToRender = choices.map((item, index) => {
				return (
					<Option key={groupName + index} value={item}>
						{item}
					</Option>
				);
			});
		}

		return dataToRender;
	};

	const renderGroups = (choices) => {
		let dataToRender = null;

		if (_.isPlainObject(choices)) {
			const optionCollection = _.toPairs(choices);

			dataToRender = optionCollection.map((group, index) => {
				const label = _.get(group, [0], 'NO_ELEMENT'); //TODO: To Add i18n
				const optionsByGroup = _.get(group, [1], []);

				return (
					<OptGroup key={label + index} label={label}>
						{renderOptions(optionsByGroup, label)}
					</OptGroup>
				);
			});
		} else {
			dataToRender = renderOptions(choices);
		}

		return dataToRender;
	};

	return <Select {...basicProps}>{renderGroups(options)}</Select>;
};

export default SelectConfiguration;
