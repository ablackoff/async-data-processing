import {getStandardTypes} from './base';
import getStandards from './task-3';

const api = () => {

	// обьединить массивы standards и standardsWithRegions
	// - получить обьект со свойствами standardType и region

	return getStandards()
		.then(({standards, standardsWithRegions}) => {
			console.log('standardsWithRegions', standardsWithRegions);
			console.log('standards', standards);

			return Promise.all(standardsWithRegions.map(item => {
				/*
					item === { standard: '...', region: '...' }
				*/

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
			console.log(standardTypes);



			// const uniqId = Object.keys(
			// 	standardTypes
			// 		.map(type => type.id)
			// 		.reduce((acc, item) => {
			// 			acc[item] = true;
			// 			return acc;
			// 		}, {})
			// );
			// const regions = [];
			//
			// console.log(uniqId);


			// return {
			// 	id: uniqId,
			// 	regions
			// };
		});



	// избавится от дублей регионов

	// сделать запрос в getStandardTypes с массивом standardType
};

export default api;
