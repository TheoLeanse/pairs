import * as _ from 'highland';
import { createReadStream } from 'fs';

export default filename =>
	_(createReadStream(filename))
		.split()
		.filter(Boolean)
		.collect()
		.toPromise(Promise);
