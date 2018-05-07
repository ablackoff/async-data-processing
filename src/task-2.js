import {getGrade} from './base';

const api = () => {
	const grade = getGrade();

	return grade
		.then(result => {
			// отфильтруем лишние значения
			return {
				properties: result.properties.filter(prop => prop.propertyConditions)
			}
		})
		.then(result => {
			// на выходе ожидаем массив
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
		.then(([result1, result2]) => result1.concat(result2));
};

export default api;
