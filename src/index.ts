import * as R from 'ramda';
import shuffle from './lib/shuffle';
import * as config from '../pairing-config.json';

export const pair = R.compose(
	R.splitEvery(2),
	shuffle
);

export default () => pair(config.in);

console.log(pair(config.in));
