class AddNoteScreen {
    get appPackage(){
        return "com.socialnmobile.dictapps.notepad.color.note";
    }

    get appActivity(){
        return "com.socialnmobile.colornote.activity.Main";
    }

    get skipBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }

    get addNoteText(){
        return $('//*[@text="Add note"]');
    }

    get addNoteBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
    }

    get textOption(){
        return $('//*[@text="Text"]');
    }

    get textEditing(){
        return $('//*[@text="Editing"]');
    }

    get titleNoteInput(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get editingNoteInput(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    get editButton(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    get viewNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    async saveNote(){
        await driver.back();
        await driver.back();
    }
}

module.exports = new AddNoteScreen();