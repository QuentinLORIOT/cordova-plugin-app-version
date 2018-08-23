function getXmlConfig() {
  var Connect = new XMLHttpRequest();
  Connect.open("GET", "config.xml", false);
  Connect.setRequestHeader("Content-Type", "text/xml");
  Connect.send(null);
  return Connect.responseXML;
}

module.exports = {
  getAppName: function (success, error) {
    success(getXmlConfig().getElementsByTagName("name")[0].firstChild.nodeValue);
    error('ERROR getAppName');
  },
  getPackageName: function (success, error) {
    success(getXmlConfig().getElementsByTagName("widget")[0].getAttribute("id"));
    error('ERROR getPackageName');
  },
  getVersionNumber: function (success, error) {
    success(getXmlConfig().getElementsByTagName("widget")[0].getAttribute("version"));
    error('ERROR getVersionNumber');
  },
  getVersionCode: function (success, error) {
    success(getXmlConfig().getElementsByTagName("widget")[0].getAttribute("version"));
    error('ERROR getVersionCode');
  }
};

require('cordova/exec/proxy').add('AppVersion', module.exports);
  
