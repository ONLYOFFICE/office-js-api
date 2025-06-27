window.Asc.plugin.attachEditorEvent("onChangeRestrictions", (value) => {
    if (value == 0) {
        console.log('You are able to edit the document');
    }
});