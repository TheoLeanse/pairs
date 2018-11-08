import splitFile from './lib/split-file';
import pair from './lib/random-pair';
import hasSameEntry from './lib/has-same-entry';

export const print = output => {
	console.log(output);
};

const previousResult = [
	['Abbey, Edward', 'Adams, Samuel'],
	['Adorno, Theodor', 'Ace, Jane'],
	['Addison, Joseph', 'Abelson, Hal'],
	['Addams, Jane', 'Adams, John Quincy'],
	['Adams, Douglas', 'Adams, Scott'],
	['Adams, Abigail', 'Aaron, Hank'],
	['Abagnale, Frank', 'Adams, John'],
	['Abrams, Creighton', 'Adams, Henry'],
	['Abel, Reuben', 'Acton, John (Lord Acton)'],
	['Abourezk, James']
];

export const init = async (filename, opts = {}) => {
	const names = await splitFile(filename);
	let result = pair(names);
	while (hasSameEntry(result, previousResult)) {
		result = pair(names);
	}
	// write result to file for repeat pair check
	print(result);
};
