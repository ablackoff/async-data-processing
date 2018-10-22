import {getStandards} from './base';
import getPropertyStandardsWithRegions from './task-1';
import getConditionStandardsWithRegions from './task-2';

function findObject(arr, item) {
	return !arr.find(elem => compareObject(elem, item));
}

function compareObject(a, b) {
	return a.region === b.region && a.standard === b.standard;
}

const api = () => {
	const conditionStandardsWithRegions = getConditionStandardsWithRegions();

	return Promise
		.all([
			conditionStandardsWithRegions,
			propertyStandardsWithRegions
		])
		.then(([standardsWithRegions1, standardsWithRegions2]) => {
			return standardsWithRegions1.concat(standardsWithRegions2);
		})
		.then(standardsWithRegions => {
			const uniqId = Object.keys(
				standardsWithRegions
					.map(standard => standard.standard)
					.reduce((acc, item) => {
						acc[item] = true;
						return acc;
					}, {})
			);

			return Promise.all([
				standardsWithRegions,
				getStandards(uniqId)
			]);
		})
		.then(([standardsWithRegions, standards]) => {
			// console.log('standardsWithRegions', standardsWithRegions);
			// console.log('standards', standards);

			return {
				standardsWithRegions,
				standards
			}
		});
};

export default api;
