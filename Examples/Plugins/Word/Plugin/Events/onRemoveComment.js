window.Asc.plugin.attachEditorEvent("onRemoveComment", (comment) => {
    console.log("event: onRemoveComment");
    console.log("Id: " + comment.Id);
});