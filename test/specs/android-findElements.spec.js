describe('Android element tests', ()=>{
    it('Find element by accessibility id', async ()=>{
        const appOption = $('~App');
        const actionBar = $('~Action Bar');
        await appOption.click();
        await expect(actionBar).toBeExisting();
    });

    it('Find elements by class name', async ()=> {
        // in this case will return the first element because of the $ - single element wdio
        const className = $('android.widget.TextView');
        await expect(className).toHaveText("API Demos");
    });

    xit('Find elements by xpath', async ()=> {
        // xpath - (//tagname[@attribute="value"])
        // find by content description
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
        // find by resourceId
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();
        // find by text
        await $('//android.widget.TextView[@text="Command two"]').click();
        // find by text
        const textAssertion = await $('//android.widget.TextView');
        expect(textAssertion).toHaveText("You selected: 1 , Command two");
    });

    it('Find elements by UIAutomator', async ()=> {
        // find by text contains
        // https://appium.readthedocs.io/en/latest/en/writing-running-appium/android/uiautomator-uiselector/
        await $('android=new UiSelector().textContains("Alert")').click();
    });

    it.only('Find multiple elements in WDIO', async () => {
        const expectList = [
            'API Demos', "Access'ibility",
            'Accessibility', 'Animation',
            'App', 'Content',
            'Graphics', 'Media',
            'NFC', 'OS',
            'Preference', 'Text',
            'Views'
        ];
        const actualList = [];
        // find multiples elements using $$ wdio
        const multipleElements = await $$('android.widget.TextView');
        for (const element of multipleElements){
            actualList.push(await element.getText());
        };
        await expect(actualList).toEqual(expectList);
    })
})