import Future from 'fluture';
import { names } from './lib/split-file';
import { randomPairs, rotatePairs } from './lib/random-pair';
import { previousResult, setPreviousResult } from './lib/manage-result-files';

export const print = x => {
	console.log(x);
	return x;
};

export const uniquePairs = names => previousResult => {
	const pairs = previousResult.getOrElse(randomPairs(names));
	return rotatePairs(pairs);
};

Future.of(uniquePairs)
	.ap(names)
	.ap(previousResult)
	.map(print)
	.map(setPreviousResult)
	.fork(
		err => print(`Something went wrong: ${err}`),
		result => print(`Success! ${result}`)
	);
