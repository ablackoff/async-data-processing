import api from '../src/task-1';

describe('test 1', () => {
	it('should work', () => {
		expect.assertions(2);

		return api()
			.then(propertyStandardsWithRegions => {
				expect(propertyStandardsWithRegions.length).toEqual(4);
				expect(propertyStandardsWithRegions).toEqual([{
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
			});
	});
});
