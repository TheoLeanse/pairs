import { readFile, writeJson } from 'fs-extra';
import { node, encase } from 'fluture';
import * as Maybe from 'data.maybe';

const FILENAME = 'result.json';

export const setPreviousResult = (data, name = FILENAME) =>
	writeJson(name, data);

export const previousResult = node(done => {
	readFile(FILENAME, 'utf8', done);
})
	.chain(encase(JSON.parse))
	.fold(Maybe.Nothing, Maybe.Just);
