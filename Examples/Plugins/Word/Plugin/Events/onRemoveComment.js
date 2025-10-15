window.Asc.plugin.attachEditorEvent("onRemoveComment", (comment) => {
    removeComments([comment.Id]);
});