class Results {
    get simpleResult(){
        return $('h2');
    }

    get historyResult(){
        // return $$('[ng-repeat="result in memory"]'); // All table rows
        return $$(`[ng-repeat="result in memory"] > td:nth-child(3)`) // Only results
    }
}

module.exports = new Results();