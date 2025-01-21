// This example shows how to get all comments from the current document.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = document.GetAllComments();
let type = comments[0].GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + type);
document.Push(paragraph);