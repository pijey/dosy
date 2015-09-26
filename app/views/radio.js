import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function(){
		Ember.$('#accordion').collapse({
			toggle: false
		});
		clearInterval(window.interval);
		window.interval = window.setInterval(function(){
			Ember.$("#atom").removeClass('off').addClass('on');
			setTimeout(function(){
				Ember.$("#atom").removeClass('on').addClass('off');
			}, 1000);
		}, 5000);
	}
});
