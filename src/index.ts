import * as R from 'ramda';
import shuffle from './lib/shuffle';
import splitFile from './lib/split-file';

export const pair = R.compose(
	R.splitEvery(2),
	shuffle
);

export const pairFromFile = R.compose(
	pair,
	splitFile
);

const init = async () => {
	R.compose(
		console.log,
		pair
	)(await splitFile('./names.txt'));
};

init();
