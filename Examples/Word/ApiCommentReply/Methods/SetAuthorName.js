// This example sets the comment reply author's name.

// How to change a comment's reply author name.

// Get all comments from the presentation and set an author to the first one's reply.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "John Smith", "uid-1", 0);
let commentReply = comments[0].GetReply(0);
commentReply.SetAuthorName("Mark Potato");
let authorName = commentReply.GetAuthorName();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment reply author name: " + authorName);
doc.Push(paragraph);