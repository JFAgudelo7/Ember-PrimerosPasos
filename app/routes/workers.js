import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return{
			workers: [
				{
					id: 'Rafa',
					name: 'Rafael Nieto de Dios',
					sexo: 'M',
					salario: 1000,
					isFemale: false,
				},
				{
					id: 'Lola',
					name: 'Lola Mento',
					sexo: 'F',
					salario: 1100,
					isFemale: true,
				},
				{
					id: 'Bin',
					name: 'Batman Bin Superman ',
					sexo: 'M',
					salario: 1200,
					isFemale: false,
				},
				{
					id: 'Helen Chufe',
					name: 'Helen Chufe',
					sexo: 'F',
					salario: 1300,
					isFemale: true,
				},
				{
					id: 'Luz',
					name: 'Luz Cuesta Mogollón',
					sexo: 'F',
					salario: 1400,
					isFemale: true,
				},
				{
					id: 'Igor',
					name: 'Igor Dito',
					sexo: 'M',
					salario: 1500,
					isFemale: false,
				},
			]}}
})
