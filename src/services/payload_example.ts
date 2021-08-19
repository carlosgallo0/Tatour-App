export const defaultJsonExample = {
	"jobs": [
		{
			"id": 1,
			"service": 300,
			"amount": [
				1
			],
			"location": [
				1.98935,
				48.701
			],
			"skills": [
				1
			],
			"time_windows": [
				[
					32400,
					36000
				]
			]
		},
		{
			"id": 2,
			"service": 300,
			"amount": [
				1
			],
			"location": [
				2.03655,
				48.61128
			],
			"skills": [
				1
			]
		},
		{
			"id": 3,
			"service": 300,
			"amount": [
				1
			],
			"location": [
				2.39719,
				49.07611
			],
			"skills": [
				2
			]
		},
		{
			"id": 4,
			"service": 300,
			"amount": [
				1
			],
			"location": [
				2.41808,
				49.22619
			],
			"skills": [
				2
			]
		},
		{
			"id": 5,
			"service": 300,
			"amount": [
				1
			],
			"location": [
				2.28325,
				48.5958
			],
			"skills": [
				14
			]
		},
		{
			"id": 6,
			"service": 300,
			"amount": [
				1
			],
			"location": [
				2.89357,
				48.90736
			],
			"skills": [
				14
			]
		}
	],
	"vehicles": [
		{
			"id": 1,
			"profile": "driving-car",
			"start": [
				2.35044,
				48.71764
			],
			"end": [
				2.35044,
				48.71764
			],
			"capacity": [
				4
			],
			"skills": [
				1,
				14
			],
			"time_window": [
				28800,
				43200
			]
		},
		{
			"id": 2,
			"profile": "driving-car",
			"start": [
				2.35044,
				48.71764
			],
			"end": [
				2.35044,
				48.71764
			],
			"capacity": [
				4
			],
			"skills": [
				2,
				14
			],
			"time_window": [
				28800,
				43200
			]
		}
	]
}


export const payloadExample = {
  jobs: [
    {
      id: 1,
      description: "Rue La Fayette, Paris",
      location: [2.349357604980469, 48.87736082887192],
    },
    {
      id: 2,
      description: "Rue du Faubourg Saint-Martin, Paris",
      location: [2.3558807373046875, 48.86945741152462],
    },
    {
      id: 3,
      description: "129, Boulevard Saint-Germain, Paris",
      location: [2.3363113403320317, 48.85274321845838],
    },
    {
      id: 4,
      description: "Rue du Faubourg Saint-Honoré, Paris",
      location: [2.322120663011447, 48.868265011841],
    },
    {
      id: 5,
      description: "9, Rue du Château d'Eau, Paris",
      location: [2.3612880706787114, 48.86935159805208],
    },
    {
      id: 6,
      description: "Rue Réaumur, Paris",
      location: [2.344293594360352, 48.86832824998009],
    },
    {
      id: 7,
      description: "Boulevard des Capucines, Paris",
      location: [2.333478927612305, 48.87092528343819],
    },
    {
      id: 8,
      description: "2b, Rue du Bouloi, Paris",
      location: [2.3399162292480473, 48.863133778674374],
    },
    {
      id: 9,
      description: "Rue La Fayette, Paris",
      location: [2.339572906494141, 48.87482058088655],
    },
    {
      id: 10,
      description: "19, Rue Saint-Marc, Paris",
      location: [2.3400878906250004, 48.87030426596098],
    },
    {
      id: 11,
      description: "Passage Reilhac, Paris",
      location: [2.355108261108399, 48.87171565817035],
    },
    {
      id: 12,
      description: "108, Rue de Rivoli, Paris",
      location: [2.3467826843261723, 48.8591246332789],
    },
    {
      id: 13,
      description: "1st Arrondissement, Paris",
      location: [2.3281574249267583, 48.86646507772314],
    },
  ],
  shipments: [],
  vehicles: [
    {
      id: 1,
      start: [2.3349380493164067, 48.866521538507754],
      startDescription: "2, Rue des Moulins, Paris",
      end: [2.3349380493164067, 48.866521538507754],
      endDescription: "2, Rue des Moulins, Paris",
    },
  ],
  options: { g: true },
};
