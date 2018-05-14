import {getStandardTypes} from './base';
import getStandards from './task-3';

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

			const uniqId = [...new Set(standardTypes.map(item => item.id))];

			return uniqId.map(id => {

				const regions = standardTypes.reduce((acc, item) => {

					if (id === item.id && acc.indexOf(item.region) === -1) {
						acc.push(item.region);
					}

					return acc;

				}, []);

				return {
					id: id,
					regions: regions.sort()
				}
			});
		});
};

export default api;
