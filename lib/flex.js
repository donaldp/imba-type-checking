
const {Type: Type} = require('./Flex/Type'/*$path$*/);

// Add type checking
function flex(target,key,descriptor){
	
	const value = descriptor.value;
	const definition = this;
	
	if (definition.length === 0) {
		
		throw new TypeError('No types defined.');
	};
	
	// pass definitions back to function
	
	if (!descriptor.value.constructor._types) {
		
		descriptor.value.constructor._types = definition;
	};
	
	descriptor.value = function() {
		
		
		// evaluate response.
		
		let response;
		
		if (definition[0].hasOwnProperty('returns')) {
			
			response = value.apply(this,arguments);
			
			Type.evaluateResponse(value,response,definition);
		};
		
		// evaluate params.
		
		if (definition[0].hasOwnProperty('params') && Array.isArray(definition[0].params)) {
			
			Type.evaluateParams(definition,arguments);
		};
		
		return (response != null) ? response : value.apply(this,arguments);
	};
	
	return descriptor;
};

exports.decorator$flex = flex;
