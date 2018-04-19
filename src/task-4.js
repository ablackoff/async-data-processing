import {getStandardTypes} from './base';
import getStandards from './task-3';

const api = () => {
	const {standards, standardsWithRegions} = getStandards();

	return Promise.resolve([]);
}

export default api;
