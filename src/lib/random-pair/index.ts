import * as R from 'ramda';
import * as S from 'sanctuary';
import { List } from 'immutable-ext';
import shuffle from './shuffle';

export const randomPairs = R.compose(
	R.splitEvery(2),
	shuffle
);

const halfLength = x => x.length / 2;

const firstHalf = x => x.slice(0, halfLength(x));

const secondHalf = x => x.slice(halfLength(x));

const pairedSplit = x => S.Pair(firstHalf(x))(secondHalf(x));

const rotate = x =>
	List.of(x)
		.map(R.splitAt(1))
		.map(R.reverse)
		.foldMap(R.flatten);

export const rotatePairs = x =>
	List.of(x)
		.map(R.flatten)
		.map(pairedSplit)
		.map(x => S.mapLeft(rotate)(x))
		.map(x => [S.fst(x), S.snd(x)])
		.foldMap(([x, y]) => R.zip(x, y));
