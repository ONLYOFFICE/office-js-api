window.Asc.plugin.attachEditorEvent("onAddComment", (comment) => {
    console.log("event: onAddComment");
    console.log("Id: " + comment.Id);
    console.log("UserName: " + comment.Data.UserName);
    console.log("Text: " + comment.Data.Text);
    console.log("Time: " + comment.Data.Time);
    console.log("Solved: " + comment.Data.Solved);
    console.log("QuoteText: " + comment.Data.QuoteText);
});