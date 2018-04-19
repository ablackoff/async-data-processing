import api from '../src/task-4';

describe('test 4', () => {
	it('should work', () => {
		expect.assertions(2);
		
		return api()
			.then(standardTypes => {
				expect(standardTypes.length).toEqual(2);
				expect(standardTypes).toEqual([{
					id: 'standardIdType1',
					regions: ['regionId1', 'regionId2', 'regionId3', 'regionId4']
				}, {
					id: 'standardIdType2',
					regions: ['regionId1', 'regionId4']
				}]);
			})
	});
});
