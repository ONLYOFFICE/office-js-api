// This example shows how to get the comment reply text.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = document.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
let commentReply = comments[0].GetReply(0);
let text = commentReply.GetText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment reply text: " + text);
document.Push(paragraph);