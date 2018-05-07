import {getStandards} from './base';
import getPropertyStandardsWithRegions from './task-1';
import getConditionStandardsWithRegions from './task-2';

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

			return {
				standardsWithRegions,
				standards
			}
		});
};

export default api;
