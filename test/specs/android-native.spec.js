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
        //assertion - alert box is no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });
});