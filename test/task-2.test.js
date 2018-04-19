import api from '../src/task-2';

describe('test 2', () => {
	it('should work', () => {
		expect.assertions(2);

		return api()
			.then(conditionStandardsWithRegions => {
				expect(conditionStandardsWithRegions.length).toEqual(5);
				expect(conditionStandardsWithRegions).toEqual([{
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
			});
	});
});
