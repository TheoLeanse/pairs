import hasSameEntry from '.';

test('hasSameEntry', () => {
	const pairs = [['Harold', 'Maud'], ['Superman']];
	expect(hasSameEntry(pairs, pairs)).toEqual(true);
});

test('hasSameEntry', () => {
	const pairs = [['Harold', 'Maud'], ['Thelma', 'Louise'], ['Superman']];
	const pairs2 = [['Maud', 'Louise'], ['Themla', 'Superman'], ['Harold']];
	expect(hasSameEntry(pairs, pairs2)).toEqual(false);
});

test('hasSameEntry', () => {
	const pairs = [['Harold', 'Maud']];
	const pairs2 = [['Thelma', 'Louise']];
	expect(hasSameEntry(pairs, pairs2)).toEqual(false);
});

test('hasSameEntry', () => {
	const pairs = [['Harold', 'Maud']];
	const pairs2 = [['Maud', 'Harold']];
	expect(hasSameEntry(pairs, pairs2)).toEqual(true);
});
