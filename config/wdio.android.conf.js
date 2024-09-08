const path  = require('path')
const {config} =  require('./wdio.shared.conf')

config.port = 4723;

config.specs = [
    './test/specs_s/**/*.js',
]

config.capabilities = [{
    // capabilities for local Appium web tests on an Android Emulator
    platformName: 'Android',
    //browserName: 'Chrome',
    //'appium:deviceName': 'Android GoogleAPI Emulator',
    'appium:deviceName': 'Emulator-5554',
    'appium:platformVersion': '11.0',
    // "appium:platformVerson": "9",
    // "appium:deviceName": "android",
    'appium:automationName': 'UiAutomator2',
    "appium:app": path.join(process.cwd(), "app\\android\\app-dev-release.apk")
}]
exports.config = config;