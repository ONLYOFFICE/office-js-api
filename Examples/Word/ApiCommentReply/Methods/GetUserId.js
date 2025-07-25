// This example shows how to get the user ID of the comment reply author.

// How to get ID of the user who left the first reply to the first comment.

// Get the comment reply author ID.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
let commentReply = comments[0].GetReply(0);
commentReply.SetUserId("uid-2");
let userId = commentReply.GetUserId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment reply user ID: " + userId);
doc.Push(paragraph);