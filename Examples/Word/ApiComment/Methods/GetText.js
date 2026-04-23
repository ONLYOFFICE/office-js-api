// Read the text content of a comment in a document.

// How do I get the message written inside a comment in a document?

// Extract a comment's text to display or process reviewer notes programmatically.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let text = comments[0].GetText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment text: " + text);
doc.Push(paragraph);