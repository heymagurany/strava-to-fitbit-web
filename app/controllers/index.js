import Controller from '@ember/controller';
import config from 'strava-to-fitbit/config/environment';

export default Controller.extend({
  strava: config.APP.strava,
  fitbit: config.APP.fitbit
});
