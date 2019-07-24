'use strict'
import Page from './Page'

class PollingPage extends Page {
    constructor () {
        super()
        this.title = `What's the word of the day? | qainterview880's presentation`
        this.pollAppCss = '.pollev-app'
        this.multipleChoiceOptionsCss = `${this.pollAppCss} .component-response-multiple-choice__option`
        this.clearLastResponseCss = `${this.pollAppCss} .component-response-multiple-choice__undo`
        
    }

    get multipleChoiceOptions () {
        return $$(this.multipleChoiceOptionsCss)
    }

    get clearLastResponseBtn () {
        return $(this.clearLastResponseCss)
    }

    clearLastResponse() {
        this.IsClearLastResponseBtnVisible() && clearLastResponseBtn.click()
    }

    IsClearLastResponseBtnVisible() {
        return browser.isVisible(this.clearLastResponseCss)
    }

    clickARandomChoice() {
        let options = this.multipleChoiceOptions
        !this.IsClearLastResponseBtnVisible() && options[this.randomNum(0, options.length) - 1].click()
        browser.pause(2000)
    }

    // Should be in a helper file... OK here for now
    randomNum(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min)
    }

    isAllOptionsEnabled() {
        return browser.isEnabled(this.multipleChoiceOptionsCss)
    }
}

module.exports = new PollingPage()