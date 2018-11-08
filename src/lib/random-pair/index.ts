import * as R from 'ramda';
import shuffle from './shuffle';

export default R.compose(
	R.splitEvery(2),
	shuffle
);
