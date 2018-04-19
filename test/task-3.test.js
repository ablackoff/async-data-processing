import api from '../src/task-3';

describe('test 3', () => {
	it('should work', () => {
		expect.assertions(2);
		
		return api().then(({standards}) => {
			expect(standards.length).toEqual(3);
			expect(standards).toEqual([{
				'id': 'standardId1',
				'standardType': 'standardIdType1'
			}, {
				'id': 'standardId2',
				'standardType': 'standardIdType1'
			}, {
				'id': 'standardId3',
				'standardType': 'standardIdType2'
			}]);
		});
	});
});
