import splitFile from './lib/split-file';
import pair from './lib/random-pair';
import hasSameEntry from './lib/has-same-entry';
import {
	getPreviousResult,
	setPreviousResult
} from './lib/manage-result-files';

export const print = console.log;

export const init = async (filename, opts = {}) => {
	const [previousResult, names] = await Promise.all([
		getPreviousResult(),
		splitFile(filename)
	]);
	let result = pair(names);
	while (previousResult && hasSameEntry(result, previousResult)) {
		result = pair(names);
	}
	print(result);
	setPreviousResult(result);
};
