// if some entry of A includes every name in some entry of B
export default a => b =>
	a.some(entryA =>
		b.some(
			entryB =>
				entryA.every(name => entryB.includes(name)) &&
				entryB.every(name => entryA.includes(name))
		)
	);
// TODO: how to do this nicer with FP?
