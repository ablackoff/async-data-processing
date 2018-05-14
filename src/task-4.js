import {getStandardTypes} from './base';
import getStandards from './task-3';

function unique (arr) {
	return [...new Set(arr)]
}

const api = () => {

	return getStandards()
		.then(({standards, standardsWithRegions}) => {

			return Promise.all(standardsWithRegions.map(item => {

				const standardTypeIds = standards
					.filter(s => s.id === item.standard)
					.map(s => s.standardType);
				
				return getStandardTypes(standardTypeIds)
					.then(standardType => {
						return {...standardType[0], region: item.region};
				    });
			}));
		})
		.then(standardTypes => {

			const uniqId = unique(standardTypes.map(item => item.id));

			return uniqId.map(id => {

				const regions = unique(standardTypes
					.filter(item => id === item.id)
					.map(item => item.region));

				return {
					id: id,
					regions: regions.sort()
				}
			});
		});
};

export default api;
