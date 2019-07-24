'use strict'
import Page from './Page'

class LoginPage extends Page {
    constructor () {
        super()
        this.title = `Audience Participation Site`
        this.url = '/'
        this.usernameTxtCss = '#join-a-presentation'
        this.joinBtnCss = '.join--button'
    }
    open() {
        super.open(this.url) 
        browser.pause(2000)
    }

    get usernameTxt () {
        return $(this.usernameTxtCss)
    }

    get joinBtn () {
        return $(this.joinBtnCss)
    }
    signIn(value) {
        this.usernameTxt.setValue(value)
        this.joinBtn.click()
        browser.pause(2000)
        this.skipWelcomeScreen()
        browser.pause(5000)
    }

    skipWelcomeScreen() {
        let headerText = `Welcome to qainterview880's presentation!`
        if ($('.header.screen-name__title').getText() === headerText) {
            $('.screen-name__cancel').click() // click the skip link
            browser.pause(1000)
        }
    }

}

module.exports = new LoginPage()