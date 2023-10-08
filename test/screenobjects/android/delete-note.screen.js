class DeleteNoteScreen {
    get moreOptions(){
        return $('~More');
    }

    get deleteOption(){
        return $('//*[@text="Delete"]');
    }

    get menuOption(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashCanOption(){
        return $('//*[@text="Trash Can"]');
    }

    get trashCanFirstNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    async deleteNote(){
        await this.moreOptions.click();
        await this.deleteOption.click();
        await driver.acceptAlert();
    }
}

export default new DeleteNoteScreen();