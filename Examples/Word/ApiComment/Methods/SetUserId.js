// This example sets the user ID to the comment author.

// How to change an author's user ID of a comment.

// Get all comments from the presentation and change its first one's user ID.

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