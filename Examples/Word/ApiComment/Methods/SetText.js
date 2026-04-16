// Set the comment text in a document.

// How to change a text of a comment in a document.

// Get all comments from the presentation and set its first one's text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].SetText("new comment's text");