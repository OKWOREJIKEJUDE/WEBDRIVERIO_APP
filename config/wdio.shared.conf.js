const path  = require('path')
exports.config = {
    runner: 'local',
    //port: 4723,

    // specs: [
    //     './test/specs_s/**/*.js',
    // ],

    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    // capabilities: [{
    //     // capabilities for local Appium web tests on an Android Emulator
    //     platformName: 'Android',
    //     //browserName: 'Chrome',
    //     'appium:deviceName': 'Android GoogleAPI Emulator',
    //     'appium:platformVersion': '11.0',
    //     // "appium:platformVerson": "9",
    //     // "appium:deviceName": "android",
    //     'appium:automationName': 'UiAutomator2',
    //     "appium:app": path.join(process.cwd(), "app\\android\\app-dev-release.apk")
    // }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
