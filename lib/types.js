
const {decorator$flex: decorator$flex} = require('./flex'/*$path$*/);

// Add flex as a global decorator.
function hasTypes(){
	
	globalThis.decorator$flex = decorator$flex;
	return globalThis.decorator$func = decorator$flex;
};

exports.hasTypes = hasTypes;
