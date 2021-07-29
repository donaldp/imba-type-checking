class Type
	# Evaluate response.

	static def evaluateResponse value\object, response\object, definition\object
		const customType = Object.values(definition[0].returns)[0]?.name

		if !response
			throw new TypeError "{value.name}! must be of the type {(customType ?? definition[0].returns.name)}, nothing returned."

		if response.constructor.name !== (customType ?? definition[0].returns.name)
			throw new TypeError "{value.name}! must be of the type {(customType ?? definition[0].returns.name)}, {response.constructor.name} returned."

	static def evaluateParams definition\object, args\object
		let position = 1

		definition[0].expects.forEach do(type, key)
			if !(type) || type == null || type == undefined
				throw new TypeError "{type} is not a valid type."

			if !args[key]
				throw new TypeError "Expected a value of type {type.name}, got a null value instead."

			if args[key].constructor !== type
				throw new TypeError "Argument {position} must be of the type {type.name}, {args[key].constructor.name} given."

			position++

exports.Type = Type
