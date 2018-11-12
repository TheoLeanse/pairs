import pair, { rotatePairs } from '.';

test('pair', () => {
	const toPair = [
		'Aaron, Hank',
		'Abagnale, Frank',
		'Abbey, Edward',
		'Abel, Reuben',
		'Abelson, Hal',
		'Abourezk, James',
		'Abrams, Creighton',
		'Ace, Jane',
		'Acton, John (Lord Acton)',
		'Adams, Abigail',
		'Adams, Douglas',
		'Adams, Henry',
		'Adams, John',
		'Adams, John Quincy',
		'Adams, Samuel',
		'Adams, Scott',
		'Addams, Jane',
		'Addison, Joseph',
		'Adorno, Theodor'
	];
	const result = pair(toPair);
	expect(result).toHaveLength(10);
});

test('rotate', () => {
	const prev = [
		['Adams, Henry', 'Abbey, Edward'],
		['Addams, Jane', 'Adams, Scott'],
		['Abrams, Creighton', 'Ace, Joan']
	];
	const result = rotatePairs(prev);
	expect(result).toEqual([
		['Adams, Henry', 'Ace, Joan'],
		['Addams, Jane', 'Abbey, Edward'],
		['Abrams, Creighton', 'Adams, Scott']
	]);
});
