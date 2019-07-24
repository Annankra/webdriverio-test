'use strict'

export default class Page {
    open (path) {
        browser.url(path);
    }
    getTitle () {
        return browser.getTitle()
    };
    isOnPage () {
        return this.getTitle() === this.title
    }
    
    waitForPageToLoad (timeout) {
        timeout = timeout || 15000
        browser.waitUntil(() => {
            return this.isOnPage()
        }, timeout)
    }
}