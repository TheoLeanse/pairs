import * as _ from 'highland';
import { readJson, writeJson, exists } from 'fs-extra';

const FILENAME = 'result.json';

export const getPreviousResult = async (name = FILENAME) =>
	(await exists(name)) ? readJson(name) : null;

export const setPreviousResult = (data, name = FILENAME) =>
	writeJson(name, data);
