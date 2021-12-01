const Page = require('./page');

class Calc extends Page {
    get firstInput(){
        return $('[ng-model="first"]');
    }

    get secondInput(){
        return $('[ng-model="second"]');
    }

    get operator(){
        return $('[ng-model="operator"]');
    }

    get goButton(){
        return $('#gobutton');
    }

    async calculation(firstNumber, secondNumber, operator){
        await this.firstInput.setValue(firstNumber);
        await this.secondInput.setValue(secondNumber);
        await this.operator.selectByAttribute('value', operator);
        await this.goButton.click();
    }

    open(){
        return super.open('');
    }
}

module.exports = new Calc();