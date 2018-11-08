import pair from '.';

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
