// This example marks a comment as solved.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = document.GetAllComments();
comments[0].SetSolved(true);
let solved = comments[0].IsSolved();
paragraph = Api.CreateParagraph();
paragraph.AddText("The comment is solved: " + solved);
document.Push(paragraph);