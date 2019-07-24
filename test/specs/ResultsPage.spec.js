import ResultsPage from '../pagesobjects/ResultsPage';
describe('ResultsPage', () => {
    before(function() {
       ResultsPage.navigate()
    })
    describe('Results',() => {
        it('should have the right title', () => {
            assert.equal(ResultsPage.getTitle(), ResultsPage.title);
        });
        describe('Chart Data', () => {
            let chartData
            before(() => {
                chartData = ResultsPage.getChartData()
            })
            describe('Question', () => {
                let question
                before(() => {
                    question = chartData.get('question')
                })
                it('should be present', () => {
                    assert.isNotNull(question);
                });
            })
            describe('Categories', () => {
                describe('A', () => {
                    it('should be present', () => {
                        assert.isTrue(chartData.has("A"))
                    });
                })
                describe('B', () => {
                    it('should be present', () => {
                        assert.isTrue(chartData.has('B'))
                    });
                })
                describe('C', () => {
                    it('should be present', () => {
                        assert.isTrue(chartData.has('C'))
                    });
                })
                describe('D', () => {
                    it('should be present', () => {
                        assert.isTrue(chartData.has('D'))
                    });
                })
            })
        })
    })
});