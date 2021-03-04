const app = require('electron').remote.app;

module.exports = {
    getAppName: function (success, error) {
        error('ERROR getAppName: not supported on electron platform');
    },
    getPackageName: function (success, error) {
        success(app.getName());
        error('ERROR getPackageName');
    },
    getVersionNumber: function (success, error) {
        success(app.getVersion());
        error('ERROR getVersionNumber');
    },
    getVersionCode: function (success, error) {
        success(app.getVersion());
        error('ERROR getVersionCode');
    }
};

require('cordova/exec/proxy').add('AppVersion', module.exports);

