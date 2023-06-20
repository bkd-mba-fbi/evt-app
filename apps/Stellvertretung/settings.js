// Rename this file to settings.js and adjust the settings

window.stellvertretung = window.stellvertretung || {};

window.stellvertretung.settings = {
  /**
   * General settings
   */
  // API base URL (without trailing slash)
  apiUrl: 'https://eventoapp-test.erz.be.ch/restApi',
  oAuthUrl: 'http://localhost/CLX.Evento',
  oAuthRedirectUrl: 'http://localhost:4200',
  clientId: 'CLX.Evento-Public',
  appScope: 'Tutoring',
  instanceId: '111',

  // Path (without trailing slash, relative to the index.html) to the
  // JavaScript bundles and the assets directory containing image and
  // locale files
  scriptsAndAssetsPath: '.',
};
