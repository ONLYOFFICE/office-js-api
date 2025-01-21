// This example gets a class type and inserts it into the document.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = document.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
let commentReply = comments[0].GetReply(0);
let type = commentReply.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + type);
document.Push(paragraph);