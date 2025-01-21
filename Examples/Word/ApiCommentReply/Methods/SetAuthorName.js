// This example sets the comment reply author's name.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = document.GetAllComments();
comments[0].AddReply("reply1", "John Smith", "uid-1", 0);
let commentReply = comments[0].GetReply(0);
commentReply.SetAuthorName("Mark Potato");
let authorName = commentReply.GetAuthorName();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment reply author name: " + authorName);
document.Push(paragraph);