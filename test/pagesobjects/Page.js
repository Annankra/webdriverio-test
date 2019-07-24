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
    navigate () {
        browser.url(this.url)
        this.waitForPageToLoad()
        browser.pause(2000)
    }
    
    waitForPageToLoad (timeout) {
        timeout = timeout || 15000
        browser.waitUntil(() => {
            return this.isOnPage()
        }, timeout)
    }
}