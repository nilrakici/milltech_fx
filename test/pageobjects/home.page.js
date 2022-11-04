const Page = require('../pageobjects/main.page');

class homePage {

    //Web Element Locators
    get buttonForms() {
        return $("div.card.mt-4.top-card:nth-child(2)");
    }

    get categories() {
        return $("div.category-cards")
    }

    get scrollToLastForm() {
        return $("div.card.mt-4.top-card:nth-child(6)")
    }

    // Contains all methods for the page
    async navigateToFormPage() {
        await this.scrollToLastForm.scrollIntoView();
        await this.buttonForms.click();
    }

}

module.exports = new homePage();