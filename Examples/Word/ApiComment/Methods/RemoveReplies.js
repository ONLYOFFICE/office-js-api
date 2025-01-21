// This example removes the specified comment replies.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = document.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
comments[0].RemoveReplies();
paragraph = Api.CreateParagraph();
paragraph.AddText("The comment replies were removed");
document.Push(paragraph);