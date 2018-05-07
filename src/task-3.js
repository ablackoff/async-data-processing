import {getStandards} from './base';

function getPropertyStandardsWithRegions() {
	return Promise.resolve([{
		'region': 'regionId1',
		'standard': 'standardId2'
	}, {
		'region': 'regionId1',
		'standard': 'standardId1'
	}, {
		'region': 'regionId3',
		'standard': 'standardId2'
	}, {
		'region': 'regionId2',
		'standard': 'standardId1'
	}]);
}

function getConditionStandardsWithRegions() {
	return Promise.resolve([{
		'region': 'regionId1',
		'standard': 'standardId1'
	}, {
		'region': 'regionId1',
		'standard': 'standardId3'
	}, {
		'region': 'regionId1',
		'standard': 'standardId2'
	}, {
		'region': 'regionId4',
		'standard': 'standardId1'
	}, {
		'region': 'regionId4',
		'standard': 'standardId3'
	}]);
}

// функция, которая находит объект в массиве
// возвращает true если объект не был найден, false если был найден
function findObject(arr, item) {
	return !arr.find(elem => compareObject(elem, item));
}

// функция, которая сравнивает 2 объекта
// возвращает true = совпадают, false = не совпадают
function compareObject(a, b) {
	return a.region === b.region && a.standard === b.standard;
}

const api = () => {
	const conditionStandardsWithRegions = getConditionStandardsWithRegions();
	const propertyStandardsWithRegions = getPropertyStandardsWithRegions();

	// нужно получить стандарты с регионами в одном массиве
	// - соединить conditional и property
	// - убрать дубликаты

	return Promise
		.all([
			conditionStandardsWithRegions,
			propertyStandardsWithRegions
		])
		.then(([standardsWithRegions1, standardsWithRegions2]) => {
			return standardsWithRegions1.concat(standardsWithRegions2);
		})
		/*
		.then(standardsWithRegions => {
			// acc = [1, 2], item = 1
			// пробегаемся по всем элементам acc
			// добавляем айтем в конец массива, если его там нет
			return standardsWithRegions.reduce((acc, item) => {
				if (findObject(acc, item)) {
					acc.push(item);
				}

				return acc;
			}, []);
		})
		*/
		.then(standardsWithRegions => {
			// из массива standardsWithRegions получить массив типов стандартов
			// - находим уникальные стандарты
			// - вызываю getStandards с массивом стандартов
			const standards = [];

			return {
				standards,
				standardsWithRegions
			}
		});
};

export default api;
