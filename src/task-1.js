import {getGrade, getProperties} from './base';

const api = () => {
	const grade = getGrade();

	grade
		.then(result => {

			// нужно получить все уникальные propertyId
			const uniqPropertyIds = Object.keys(result.properties.map(grade => grade.property)
				.reduce((acc, item) => {

					acc[item] = true;

					return acc;
				}, {}));

			return Promise.all([result, getProperties(uniqPropertyIds)]);
		})
		.then(([grades, props]) => {

		});

	return Promise.resolve([]);
};

export default api;
