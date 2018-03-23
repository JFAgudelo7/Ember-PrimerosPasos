import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';

export default Route.extend({
	model({ id }){
		const workers = this.modelFor('workers').workers;
		const worker = workers.findBy('id',id);
		if(!worker){
			this.transitionTo('worker');
		}else{
			return{
				name: worker.name,
				sex: worker.sexo,
				salary: worker.salario,
			};
		}

	}

});
