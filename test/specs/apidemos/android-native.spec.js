describe('Android native feature tests', ()=>{
    it('Access an Activity (screen) directly', async ()=>{
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
        await driver.pause(2000);
        await expect('//*[@text="App/Alert Dialogs"]').toExist();
    });

    it('Working with Dialog Boxes', async ()=>{
        //access screen
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
        //click on first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]');
        //accept alert
        await driver.acceptAlert();
        // await driver.dismissAlert();
        //assertion - alert box is no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it('Vertical scrolling', async ()=>{
        await $('~App').click();
        await $('~Activity').click();
        // scroll to end (not stable if element gets moved)
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        // scrollTextIntoView (more stable)
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();
        // await $('~Secure Surfaces').click();
        await expect($('~Secure Dialog').toExist());
    });

    it('Horizontal scrolling', async ()=>{
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1");
        // horizontal scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
        //await expect($('~Secure Dialog').toExist());
    });

    it.only('Scrolling Exercise', async ()=>{
        // View -> Date widgets -> Dialog
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.DateWidgets1");
        // Get the current date
        const currentDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();
        // Click change date button
        await $('~change the date').click();
        // Scroll horizontally to the righ
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        // Pick the 10th date from that month
        await $('//*[@text="10"]').click();
        // Click OK button
        await driver.acceptAlert();
        // Assert the date is updated
        const newDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();
        expect(currentDate).not.toBe(newDate);
    });
});