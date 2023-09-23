describe('Android element tests', ()=>{
    it('Find element by accessibility id', async ()=>{
        const appOption = $('~App');
        const actionBar = $('~Action Bar');
        await appOption.click();
        await expect(actionBar).toBeExisting();
    });

    it('Find elements by class name', async ()=> {
        const className = $('android.widget.TextView');
        await expect(className).toHaveText("API Demos");
        // in this case will return the first element because of the $
    });

    it('Find elements by xpath', async ()=> {
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
})