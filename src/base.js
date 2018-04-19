const gradeProperties = [{
	property: 'propertyId2',
	region: 'regionId1'
}, {
	property: 'propertyId1',
	region: 'regionId1'
}, {
	property: 'propertyId2',
	region: 'regionId3'
}, {
	property: 'propertyId1',
	region: 'regionId2'
}, {
	property: 'propertyId2',
	region: 'regionId1',
	propertyConditions: [{
		standard: 'standardId1'
	}, {
		standard: 'standardId3'
	}, {
		standard: 'standardId2'
	}]
}, {
	property: 'propertyId1',
	region: 'regionId4',
	propertyConditions: [{
		standard: 'standardId1'
	}, {
		standard: 'standardId3'
	}]
}];

export function getGrade() {
	return Promise.resolve({
		properties: gradeProperties
	});
}

const properties = [{
	id: 'propertyId1',
	standard: 'standardId1'
}, {
	id: 'propertyId2',
	standard: 'standardId2'
}, {
	id: 'propertyId3',
	standard: 'standardId2'
}, {
	id: 'propertyId4',
	standard: 'standardId3'
}, {
	id: 'propertyId5',
	standard: 'standardId4'
}, {
	id: 'propertyId6',
	standard: 'standardId4'
}];

export function getProperties(ids) {
	return Promise.resolve(
		properties.filter(p => ids.indexOf(p.id) !== -1)
	);
}

const standards = [{
	id: 'standardId1',
	standardType: 'standardIdType1'
}, {
	id: 'standardId2',
	standardType: 'standardIdType1'
}, {
	id: 'standardId3',
	standardType: 'standardIdType2'
}, {
	id: 'standardId4',
	standardType: 'standardIdType4'
}];

export function getStandards(ids) {
	return Promise.resolve(
		standards.filter(s => ids.indexOf(s.id) !== -1)
	);
}

const standardTypes = [{
	id: 'standardIdType1'
}, {
	id: 'standardIdType2'
}, {
	id: 'standardIdType3'
}, {
	id: 'standardIdType4'
}];

export function getStandardTypes(ids) {
	return Promise.resolve(
		standardTypes.filter(st => ids.indexOf(st.id) !== -1)
	);
}