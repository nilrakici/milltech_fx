/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
class Page {

    open(path) {
        browser.url(path);
        browser.maximizeWindow();
        const browserTitle = browser.getTitle();
    }

    clickEnter() {
        browser.keys("\uE007");
    }

    clickRefresh() {
        browser.refresh();
    }

}

module.exports = new Page();