const {Given, And, When, Then, After} = require('@cucumber/cucumber');

const homePage = require('../pageobjects/home.page');
const Page = require('../pageobjects/main.page');
const formPage = require('../pageobjects/form.page')
const practiceFormPage = require('../pageobjects/practiceform.page')
const userDetails = require('../helpers/userDetails');

Given(/^I open the site and navigate to the Form Page$/, async () => {

    await Page.open("https://demoqa.com/");
    await expect(homePage.categories).toBePresent();
    await homePage.navigateToFormPage();
    await expect(browser).toHaveUrl('https://demoqa.com/forms')

});

Given(/^I open the Practice Form page$/, async () => {

    await formPage.navigateToPracticeFormPage();
    await expect(practiceFormPage.header).toHaveText("Practice Form");

});

When(/^I fill and submit the form with the details$/, async () => {

    const arrayLength = userDetails.personalDetails.length;
    for (let i = 0; i < arrayLength; i++) {
        await practiceFormPage.fillFirstName(userDetails.personalDetails[i].firstName);
        await practiceFormPage.fillLastName(userDetails.personalDetails[i].lastName);
        await practiceFormPage.fillEmail(userDetails.personalDetails[i].email);
        await practiceFormPage.fillNumber(userDetails.personalDetails[i].mobile);
        await practiceFormPage.chooseGender(userDetails.personalDetails[i].gender);

        await Page.clickEnter();
        await expect(practiceFormPage.modalHeader).toHaveText("Thanks for submitting the form")
        await expect(practiceFormPage.modalName).toHaveText(userDetails.personalDetails[i].firstName + " " + userDetails.personalDetails[i].lastName)
        await expect(practiceFormPage.modalEmail).toHaveText(userDetails.personalDetails[i].email)
        await expect(practiceFormPage.modalMobile).toHaveText(userDetails.personalDetails[i].mobile)

        if (i ===(arrayLength-1))
            break
        await Page.clickRefresh();

    }

});
Then(/^I can display the correct user details on the screen$/, async () => {
    await expect(practiceFormPage.modalHeader).toHaveText("Thanks for submitting the form")
});


