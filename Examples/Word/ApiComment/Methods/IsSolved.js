// Check if a comment is solved or not in a document.

// How to know whether a comment is resolved or not in a document.

// Get a boolean value that indicates that a comment is solved in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].SetSolved(true);
let solved = comments[0].IsSolved();
paragraph = Api.CreateParagraph();
paragraph.AddText("The comment is solved: " + solved);
doc.Push(paragraph);