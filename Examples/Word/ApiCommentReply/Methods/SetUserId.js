// This example sets the user ID to the comment reply author.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = document.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
let commentReply = comments[0].GetReply(0);
commentReply.SetUserId("uid-1");
let userId = commentReply.GetUserId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment reply user ID: " + userId);
document.Push(paragraph);