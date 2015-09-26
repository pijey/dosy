import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function(){
		Ember.$('#accordion').collapse({
			toggle: false
		});
	}
});
