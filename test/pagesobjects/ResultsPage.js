'use strict'
import Page from './Page'

class ResultsPage extends Page {
    constructor () {
        super()
        this.title = `Poll Ev Visualizations`
        this.url = 'https://viz.polleverywhere.com/multiple_choice_polls/AxE2ULWiYsaGgmZ0Zundf'
        this.questionCss = '.chart-header--title .title'
        this.vContainerCss = '.visualization_content' // visualization contatainer Css
        this.chartDataCss = {
            question: '.chart-header--title .title',
            responsetotal: `${this.vContainerCss} .chart--response-total`,
            optionsText: `${this.vContainerCss} tspan`,
            category: `${this.vContainerCss} .chart--keyword`
        }
    
    }
  
    get category () {
        return browser.getText(this.chartDataCss.category)
    }

    get responsetotal () {
        return browser.getText(this.chartDataCss.responsetotal)
    }

    get usernameTxt () {
        return $(this.usernameTxtCss)
    }
    getChartData () {
        let chartData = new Map()
        chartData.set('question', $(this.chartDataCss.question).getText())
        this.category.forEach( (cat, index) => {
            chartData.set(cat, this.responsetotal[index])
        });
        return chartData
    }
}

module.exports = new ResultsPage()