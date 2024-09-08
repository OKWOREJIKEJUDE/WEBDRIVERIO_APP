require('dotenv').config()

exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'okworejike_a4p1WK',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'UzAqV3tzPqQDNTkPzcyg',
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        {
          app: 'bs://sample.app',
          //app: 'bs://f164b52cc683459963a106a18ecf3f6cfd8292a1',
          buildIdentifier: "12.0",
          browserstackLocal: true
        },
      ]
    ],
    capabilities: [
      {
      'bstack:options': {
        deviceName: 'Samsung Galaxy S22 Ultra',
        platformVersion: '12.0',
        platformName: 'android',
      }
    }, 
    {
      'bstack:options': {
        deviceName: 'Google Pixel 7 Pro',
        platformVersion: '13.0',
        platformName: 'android',
      } 
    }, 
    {
      'bstack:options': {
        deviceName: 'OnePlus 9',
        platformVersion: '11.0',
        platformName: 'android',
      }
    }
  ],

    commonCapabilities: {
      'bstack:options': {
        projectName: "BrowserStack Sample",
        buildName: "bstack-demo",
        testObservability: true,
        debug: true,
        networkLogs: true,
        percy: false,
        //percyCaptureMode: auto
      }
    },
    maxInstances: 10,
}