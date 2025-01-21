// This example shows how to get the comment text.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = document.GetAllComments();
let text = comments[0].GetText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment text: " + text);
document.Push(paragraph);