// This example delets the comment from the document.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = document.GetAllComments();
comments[0].Delete();
paragraph = Api.CreateParagraph();
paragraph.AddText("The comment to the first paragraph was deleted");
document.Push(paragraph);