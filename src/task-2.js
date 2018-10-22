import {getGrade} from './base';

const api = () => {
	const grade = getGrade();

	return grade
		.then(result => {
			return {
				properties: result.properties.filter(prop => prop.propertyConditions)
			}
		})
		.then(result => {
			return result.properties.map(grade => {

				const {region, propertyConditions} = grade;

				return propertyConditions.map(prop => {

					const {standard} = prop;

					return {
						region,
						standard
					}
				});
			});
		})
		.then(res => {
			return res.reduce((acc, item) => acc.concat(item));
		});
};

export default api;
