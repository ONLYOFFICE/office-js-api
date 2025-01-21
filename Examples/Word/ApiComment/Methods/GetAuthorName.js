// This example shows how to get the comment author's name.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = document.GetAllComments();
let authorName = comments[0].GetAuthorName();
paragraph = Api.CreateParagraph();
paragraph.AddText("Author name: " + authorName);
document.Push(paragraph);