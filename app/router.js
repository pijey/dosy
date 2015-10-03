import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: "hash"
});




Router.map(function() {
  this.route('radio');
  this.route('medical');
});

export default Router;
