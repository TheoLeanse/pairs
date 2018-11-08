import { pair } from './index';

test('pair', () => {
	const toPair = [
		'andy',
		'kirsten',
		'theo',
		'chris i',
		'chris f',
		'steven',
		'charlotte',
		'cristina',
		'dan',
		'paul'
	];
	const result = pair(toPair);
	expect(result).toHaveLength(5);
});
