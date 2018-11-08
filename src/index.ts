import splitFile from './lib/split-file';
import pair from './lib/random-pair';
import hasSameEntry from './lib/has-same-entry';
import {
	getPreviousResult,
	setPreviousResult
} from './lib/manage-result-files';

export const print = console.log;

export const uniquePairs = (names, previous) => {
	const result = pair(names);
	return !previous || !hasSameEntry(result, previous)
		? result
		: uniquePairs(names, previous);
};

export const init = async (filename, opts = {}) => {
	const [names, previous] = await Promise.all([
		splitFile(filename),
		getPreviousResult()
	]);
	const result = uniquePairs(names, previous);
	print(result);
	setPreviousResult(result);
};
