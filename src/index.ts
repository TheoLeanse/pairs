import * as R from 'ramda';
import shuffle from './lib/shuffle';

export const pair = R.compose(
	R.splitEvery(2),
	shuffle
);
