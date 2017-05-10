const Models = {
	person: {
		fields: [
			'name',
			'birthYear',
			'eyeColor',
			'gender',
			'hairColor',
			'height',
			'mass',
			'skinColor'
		]
	},
	planet: {
		fields: [
			'name',
			'diameter',
			'rotationPeriod',
			'orbitalPeriod',
			'gravity',
			'population',
			'climates',
			'terrains',
			'surfaceWater'
		]
	},
	vehicle: {
		fields: [
			'name',
			'model',
			'vehicleClass',
			'manufacturers',
			'costInCredits',
			'length',
			'crew',
			'passengers',
			'maxAtmospheringSpeed',
			'cargoCapacity',
			'consumables'
		]
	},
	starship: {
		fields: [
			'name',
			'model',
			'starshipClass',
			'manufacturers',
			'costInCredits',
			'length',
			'crew',
			'passengers',
			'maxAtmospheringSpeed',
			'hyperdriveRating',
			'MGLT',
			'cargoCapacity',
			'consumables'
		]
	},
	species: {
		fields: [
			'name',
			'classification',
			'designation',
			'averageHeight',
			'averageLifespan',
			'eyeColors',
			'hairColors',
			'skinColors',
			'language'
		]
	},
	film: {
		fields: [ 'title' ]
	}
}

export default Models