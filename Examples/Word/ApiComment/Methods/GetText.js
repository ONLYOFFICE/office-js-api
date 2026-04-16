// Get the comment text in a document.

// How to get a raw text of a comment in a document.

// Get all comments from the presentation and the first one's text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let text = comments[0].GetText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment text: " + text);
doc.Push(paragraph);