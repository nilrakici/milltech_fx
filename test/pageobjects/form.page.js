const Page = require('../pageobjects/main.page');

class formPage {

    get buttonPracticeForms() {
        return $("div.element-list.collapse.show")
    }

    async navigateToPracticeFormPage() {
        await this.buttonPracticeForms.waitForClickable();
        await this.buttonPracticeForms.click();
    }

}

module.exports = new formPage();