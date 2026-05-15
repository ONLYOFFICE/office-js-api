// Assign a user ID to the author of a comment in a document.

// How do I set the user ID for the author of a comment in a document?

// Link a comment to a specific user account by updating the stored author identifier.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].SetUserId("uid-1");
let userId = comments[0].GetUserId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment user ID: " + userId);
doc.Push(paragraph);