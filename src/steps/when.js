module.exports = function when() {
    this.When(/^I go to https:\/\/github\.com$/, () => {
        browser.url('https://github.com');
    });

    this.When(/^I press button "([^"]*)"$/, (btnTitle) => {
        const selector = `button=${btnTitle}`;
        browser.click(selector);
    });
};
