import Ember from 'ember';
import config from 'strava-to-fitbit/config/environment';

export default Ember.Controller.extend({
  strava: config.APP.strava,
  fitbit: config.APP.fitbit
});
