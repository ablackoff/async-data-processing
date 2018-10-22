import {getGrade, getProperties} from './base';

const api = () => {
	const grade = getGrade();

	return grade
		.then(result => {
			return {
				properties: result.properties.filter(prop => !prop.propertyConditions)
			}
		})
		.then(result => {
			const uniqPropertyIds = Object.keys(
				result.properties
					.map(grade => grade.property)
					.reduce((acc, item) => {
						acc[item] = true;
						return acc;
					}, {})
			);

			return Promise.all([
				result,
				getProperties(uniqPropertyIds)
			]);
		})
		.then(([grades, props]) => {
			return grades.properties.map(grade => {
				const {region, property} = grade;
				const {standard} = props.find(p => p.id === property);
				
				return {
					standard,
					region
				};
			});
		});
};

export default api;
