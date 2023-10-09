import AddNoteScreen from "../../../screenobjects/android/add-note.screen";
import DeleteNoteScreen from "../../../screenobjects/android/delete-note.screen";

describe('Add notes', ()=>{
    it('Skip tutorial', async ()=>{
        await AddNoteScreen.skipBtn.click();
        await expect(AddNoteScreen.addNoteText).toBeDisplayed();
    });

    it('Add a note, save changes and verify note', async () => {
        const titleNote = "Fav anime list";
        const listNote = "AOT\nNaruto";
        await AddNoteScreen.addNoteBtn.click();
        await AddNoteScreen.textOption.click();
        await expect(AddNoteScreen.textEditing).toBeDisplayed();
        // add note title and body
        await AddNoteScreen.titleNoteInput.addValue(titleNote);
        await AddNoteScreen.editingNoteInput.addValue(listNote);
        // save the changes back twice
        await AddNoteScreen.saveNote();
        await expect(AddNoteScreen.editButton).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText(listNote);
    });

    it('Add a note, save changes, delete the note and verify in the trash can', async () => {
        const titleNote = "Fav food list";
        const listNote = "Pasta\nSushi\nHamburguer";
        await driver.startActivity(AddNoteScreen.appPackage, AddNoteScreen.appActivity);
        await AddNoteScreen.addNoteBtn.click();
        await AddNoteScreen.textOption.click();
        await expect(AddNoteScreen.textEditing).toBeDisplayed();
        // add note title and body
        await AddNoteScreen.titleNoteInput.addValue(titleNote);
        await AddNoteScreen.editingNoteInput.addValue(listNote);
        // save the changes back twice
        await AddNoteScreen.saveNote();
        await expect(AddNoteScreen.editButton).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText(listNote);
        await driver.back();
        await $(`//*[@text="${titleNote}"]`).click();
        await DeleteNoteScreen.deleteNote();
        await DeleteNoteScreen.menuOption.click();
        await DeleteNoteScreen.trashCanOption.click();
        await expect(DeleteNoteScreen.trashCanFirstNote).toBeDisplayed();

    });
});