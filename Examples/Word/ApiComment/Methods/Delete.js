// This example delets the comment from the document.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].Delete();
paragraph = Api.CreateParagraph();
paragraph.AddText("The comment to the first paragraph was deleted");
doc.Push(paragraph);