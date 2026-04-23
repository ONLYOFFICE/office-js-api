// Replace the text of an existing comment in a document.

// How do I change the message written inside a comment in a document?

// Update a comment's content to correct or revise the original feedback.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].SetText("new comment's text");