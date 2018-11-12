import Future from 'fluture';
import { List } from 'immutable-ext';
import { names } from './lib/split-file';
import { randomPairs, rotatePairs } from './lib/random-pair';
import { previousResult, setPreviousResult } from './lib/manage-result-files';

const log = console.log as any;

export const print = x => log(x) || x;

export const uniquePairs = names => previousResult =>
	List.of(previousResult.getOrElse(randomPairs(names))).foldMap(rotatePairs);

Future.of(uniquePairs)
	.ap(names)
	.ap(previousResult)
	.map(print)
	.map(setPreviousResult)
	.fork(err => print(`Something went wrong: ${err}`), _ => print(`Success!`));
