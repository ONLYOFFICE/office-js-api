// This example shows how to get the comment reply author's name.

// How to find out a comment's reply author.

// Get all comments from the presentation and display the first one's reply author name.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
let commentReply = comments[0].GetReply(0);
paragraph = Api.CreateParagraph();
paragraph.AddText("First comment reply's author: " + commentReply.GetAuthorName());
doc.Push(paragraph);