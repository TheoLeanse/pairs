import { readFile } from 'fs';
import { node } from 'fluture';

const split = x => x.split('\n');
const filter = x => x.filter(Boolean);

const splitFile = filename =>
	node(done => readFile(filename, 'utf8', done))
		.map(split)
		.map(filter);

export const names = splitFile('names.txt');
