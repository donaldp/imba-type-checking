
class Type {
	
	// Evaluate response.
	
	/**
	@param {object} value
	@param {object} response
	@param {object} definition
	*/
	static evaluateResponse(value,response,definition){
		
		const customType = Object.values(definition[0].returns)[0]?.name;
		
		if (!response) {
			
			throw new TypeError(("" + (value.name) + "! must be of the type " + ((customType != null) ? customType : definition[0].returns.name) + ", nothing returned."));
		};
		
		if (response.constructor.name !== ((customType != null) ? customType : definition[0].returns.name)) {
			
			throw new TypeError(("" + (value.name) + "! must be of the type " + ((customType != null) ? customType : definition[0].returns.name) + ", " + (response.constructor.name) + " returned."));
		};
	}
	
	/**
	@param {object} definition
	@param {object} args
	*/
	static evaluateParams(definition,args){
		
		let position = 1;
		
		return definition[0].expects.forEach(function(type,key) {
			
			if (!(type) || type == null || type == undefined) {
				
				throw new TypeError(("" + type + " is not a valid type."));
			};
			
			if (!args[key]) {
				
				throw new TypeError(("Expected a value of type " + (type.name) + ", got a null value instead."));
			};
			
			if (args[key].constructor !== type) {
				
				throw new TypeError(("Argument " + position + " must be of the type " + (type.name) + ", " + (args[key].constructor.name) + " given."));
			};
			
			return position++;
		});
	}
};

exports.Type = Type;
