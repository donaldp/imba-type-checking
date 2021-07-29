import { @func } from './lib'

class Person
	static get #people
		[
			{
				name: 'Donald'
				planet: 'Earth'
			}
			{
				name: 'Mj'
				planet: 'Kepler-452'
			}
			{
				name: 'Loki',
				planet: 'Jotunheim'
			}
		]

	@func({ expects: [ String ], returns: Object } )
	static def find name\string
		const results = #people.filter do(person\Object)
			person.name === name

		{
			data: results
			count: results.length
		}


console.log(Person.find(20))