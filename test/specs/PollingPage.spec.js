import LoginPage from '../pagesobjects/LoginPage';
import PollingPage from '../pagesobjects/PollingPage';
describe('Polling', () => {
    before(function() {
       LoginPage.open()
       LoginPage.signIn('qainterview880')
    })
    describe('Take A Poll',() => {
        it('should have the right title', () => {
            assert.equal(PollingPage.getTitle(), PollingPage.title);
        });
        describe('Options', ()=> {
            it('should be enabled', () => {
            });
        })
        describe('Clear Last Response Button', ()=> {
            it('should note be present', () => {
                assert.equal(PollingPage.IsClearLastResponseBtnVisible(), false);
            });
        })
        describe('Click A choice', () => {
            before(() => {
                PollingPage.clickARandomChoice()
            })
            describe('Options', ()=> {
                it('should be enabled', () => {
                });
            })
            describe('Clear Last Response Button', ()=> {
                it('should be present', () => {
                    assert.equal(PollingPage.IsClearLastResponseBtnVisible(), true);
                });
            })
        })
    })
});