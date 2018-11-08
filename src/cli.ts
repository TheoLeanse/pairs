#!/usr/bin/env node
import * as meow from 'meow';
import { init } from './index';

const cli = meow(
	`
	Usage
	  $ pairup <input>

	Options

	Examples
	  $ pairup names.txt
`,
	{
		flags: {
			example: {
				type: 'boolean',
				alias: 'x'
			}
		}
	}
);

init(cli.input[0], cli.flags);
