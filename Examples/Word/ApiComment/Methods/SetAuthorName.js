// This example sets the comment author's name.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = document.GetAllComments();
comments[0].SetAuthorName("Mark Potato");
paragraph = Api.CreateParagraph();
paragraph.AddText("The comment author's name was changed");
document.Push(paragraph);