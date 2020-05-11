import _ from 'lodash';

const extractProps = (props, ...specialProperties) => {
	let propsCollection = _.toPairs(props);
	const specialCollection = specialProperties.map((properties) => {
		return _.remove(propsCollection, (prop) => _.includes(properties, _.get(prop, [0])));
	});

	const specialProps = specialCollection.map((special) => {
		return _.fromPairs(special);
	});

	const basicProps = _.fromPairs(propsCollection);

	return [basicProps, ...specialProps];
};

export default extractProps;
