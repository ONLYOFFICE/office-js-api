// This example shows how to get the comment ID.

// Display comment author name by finding a comment by its ID.

// How to get a comment knowing its ID.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let id = comments[0].GetId();
let comment = doc.GetCommentById(id);
let authorName = comment.GetAutorName();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment author name: " + authorName);
doc.Push(paragraph);