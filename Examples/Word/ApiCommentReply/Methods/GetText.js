// This example shows how to get the comment reply text.

// How to get a raw text of a comment reply.

// Get all comments from the presentation, get the first one's reply and return its text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
let commentReply = comments[0].GetReply(0);
let text = commentReply.GetText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment reply text: " + text);
doc.Push(paragraph);