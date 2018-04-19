import {getStandards} from './base';
import getPropertyStandardsWithRegions from './task-1';
import getConditionStandardsWithRegions from './task-2';

const api = () => {
	const conditionStandardsWithRegions = getConditionStandardsWithRegions();
	const propertyStandardsWithRegions = getPropertyStandardsWithRegions();

	const standardsWithRegions = [];

	const standards = [];

	return Promise.resolve({
		standards,
		standardsWithRegions
	});
}

export default api;
