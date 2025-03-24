// This example sets the comment author's name.

// How to change a comment's author name.

// Get all comments from the presentation and set an author for the first one.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].SetAuthorName("Mark Potato");
paragraph = Api.CreateParagraph();
paragraph.AddText("The comment author's name was changed");
doc.Push(paragraph);