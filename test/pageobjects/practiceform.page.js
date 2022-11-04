const Page = require('../pageobjects/main.page');

class practiceFormPage {

    get header() {
        return $("div.main-header")
    }

    get modalHeader() {
        return $("#example-modal-sizes-title-lg")
    }

    get inputFirstName() {
        return $("#firstName")
    }

    get inputLastName() {
        return $("#lastName")
    }

    get inputUserEmail() {
        return $("#userEmail")
    }

    get inputUserPhone() {
        return $("#userNumber")
    }

    get femaleRadio() {
        return $("div.custom-control.custom-radio.custom-control-inline:nth-child(2)")
    }

    get maleRadio() {
        return $("div.custom-control.custom-radio.custom-control-inline:nth-child(1)")
    }

    get modalName() {
        return $("tr:nth-child(1) > td:nth-child(2)")
    }

    get modalEmail() {
        return $("tr:nth-child(2) > td:nth-child(2)")
    }

    get modalGender() {
        return $("tr:nth-child(3) > td:nth-child(2)")
    }

    get modalMobile() {
        return $("tr:nth-child(4) > td:nth-child(2)")
    }

    async fillFirstName(firstname) {
        await this.inputFirstName.waitForDisplayed();
        await this.inputFirstName.setValue(firstname);
    }

    async fillLastName(lastname) {
        await this.inputLastName.waitForDisplayed();
        await this.inputLastName.setValue(lastname);
    }

    async fillEmail(email) {
        await this.inputUserEmail.waitForDisplayed();
        await this.inputUserEmail.setValue(email);
    }

    async fillNumber(number) {
        await this.inputUserPhone.waitForDisplayed();
        await this.inputUserPhone.setValue(number);
    }

    async chooseGender(gender) {
        if (gender === "female") {
            await this.checkFemale();
        } else if (gender === "male") {
            await this.checkMale();
        }
    }

    async checkFemale() {
        await this.femaleRadio.waitForClickable();
        await this.femaleRadio.click();
    }

    async checkMale() {
        await this.maleRadio.waitForClickable();
        await this.maleRadio.click();
    }

}

module.exports = new practiceFormPage();