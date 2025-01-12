const { Type: Type } = require './Flex/Type'

# Add type checking
def flex target, key, descriptor
	const value = descriptor.value
	const definition = this

	if definition.length === 0
		throw new TypeError 'No types defined.'

	# pass definitions back to function

	if !descriptor.value.constructor._types
		descriptor.value.constructor._types = definition

	descriptor.value = do

		# evaluate response.

		let response

		if definition[0].hasOwnProperty 'returns'
			response = value.apply(this, arguments)

			Type.evaluateResponse value, response, definition

		# evaluate params.

		if definition[0].hasOwnProperty('expects') && Array.isArray(definition[0].expects)
			Type.evaluateParams definition, arguments

		elif definition[0].hasOwnProperty('expects')
			throw new TypeError('\"expects\" is not an array.')

		return response ?? value.apply(this, arguments)

	return descriptor

exports.decorator$flex = flex
