describe('Add notes', ()=>{
    it('Skip tutorial', async ()=>{
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });

    it('Add a note, save changes and verify note', async () => {
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();
        // add note title and body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Fav anime list");
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("AOT\nNaruto");
        // save the changes back twice
        await driver.back();
        await driver.back();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("AOT\nNaruto");
    });

    it('Add a note, save changes, delete the note and verify in the trash can', async () => {
        await driver.startActivity("com.socialnmobile.dictapps.notepad.color.note", "com.socialnmobile.colornote.activity.Main");
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();
        // add note title and body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Fav food list");
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Pasta\nSushi\nHamburguer");
        // save the changes back twice
        await driver.back();
        await driver.back();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Pasta\nSushi\nHamburguer");
        await driver.back();
        await $('//*[@text="Fav food list"]').click();
        await $('~More').click();
        await $('//*[@text="Delete"]').click();
        // Click OK button
        await driver.acceptAlert();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        await $('//*[@text="Trash Can"]').click();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')).toBeDisplayed();

    });
});