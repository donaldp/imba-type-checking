const { decorator$flex: decorator$flex } = require './flex'

# Add flex as a global decorator.
def hasTypes
	global.decorator$flex = decorator$flex
	global.decorator$func = decorator$flex

exports.hasTypes = hasTypes
