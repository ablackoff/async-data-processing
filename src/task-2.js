import {getGrade} from './base';
// import _ from 'lodash';

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
		.then(res => {

			// return [].concat(...res)
			// return res.reduce((acc, item) => [...acc, ...item]);
			// return _.concat(...res);
			return res.reduce((acc, item) => acc.concat(item));


		});
};

export default api;
