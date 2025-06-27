window.Asc.plugin.attachEditorEvent("onAddComment", (comment) => {
    Comments.push(comment);
    $('#scrollable-container-id').append(makeComment(comment.Id, comment));
});