/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'open-social-pool',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

     APP: {
      // API host and port
      ApiUrl: 'https://eth-api.letshash.online/',
      PoolName: 'Letshash.it Mining Ethereum',
      CompanyName: 'Letshash.it',
      // HTTP mining endpoint
      HttpHost: 'https://eth.letshash.online/',
      HttpPort: 7578,

      // Stratum mining endpoint
      StratumHost: 'letshash.online',
      StratumPort: 1444,

      // Fee and payout details
      PoolFee: '0.5%',
      PayoutThreshold: '0.5',
      PayoutInterval: '30m',

      // For network hashrate (change for your favourite fork)
      BlockTime: 14.4,
      BlockReward: 2,
      Unit: 'ETH',

    }
  };

  if (environment === 'development') {
    /* Override ApiUrl just for development, while you are customizing
      frontend markup and css theme on your workstation.
    */
    ENV.APP.ApiUrl = '//localhost:8048/'
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';


    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
