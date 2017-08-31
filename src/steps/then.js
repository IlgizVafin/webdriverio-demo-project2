module.exports = function then() {
    this.Then(/^I expect page title "([^"]*)"$/, (docTitle) => {
        const title = browser.getTitle();
        expect(title.trim()).to
            .equal(docTitle, `title is "${title}" but should be "${docTitle}"`);
    });
};
