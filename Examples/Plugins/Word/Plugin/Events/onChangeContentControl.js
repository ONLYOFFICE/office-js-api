window.Asc.plugin.attachEditorEvent("onChangeContentControl", (control) => {
    console.log("event: onChangeContentControl");
    console.log("Tag: " + control.Tag);
    console.log("Id: " + control.Id);
    console.log("Lock: " + control.Lock);
    console.log("InternalId: " + control.InternalId);
    console.log("Alias: " + control.Alias);
    console.log("Appearance: " + control.Appearance);
});