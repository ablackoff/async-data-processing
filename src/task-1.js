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
			// нужно получить все уникальные propertyId
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
			// grades = [{property, region}];
		  // props = [{id, standard}];
		  // заменить property на standard
		  // на выходе ожидаем массив
			return grades.properties.map(grade => {
				const {region, property} = grade;
				const {standard} = props.filter(p => p.id === property)[0];
				
				return {
					standard,
					region
				};
			});
		});
};

export default api;
