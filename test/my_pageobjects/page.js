const { browser } = require('@wdio/globals')

class Page {
    // Common method to wait for an element to be visible
    async waitForElementToBeVisible(element, timeout = 5000) {
        await element.waitForDisplayed({ timeout });
    }

    // Common method to handle swiping actions, useful for mobile apps
    async swipe(direction) {
        // Implement swipe logic depending on the direction
    }
}

module.exports = Page;

