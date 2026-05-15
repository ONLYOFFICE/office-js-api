// Delete a comment from a document.

// How do I delete a comment from a document?

// Remove an unwanted annotation after a review is complete in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].Delete();
paragraph = Api.CreateParagraph();
paragraph.AddText("The comment to the first paragraph was deleted");
doc.Push(paragraph);