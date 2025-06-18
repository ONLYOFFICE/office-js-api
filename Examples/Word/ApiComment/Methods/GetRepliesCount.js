// This example shows how to get a number of the comment replies.

// How to get a number of replies a comment has.

// Get all comments from the presentation and the first one's number of replies.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
let repliesCount = comments[0].GetRepliesCount();
paragraph = Api.CreateParagraph();
paragraph.AddText("Number of comment replies: " + repliesCount);
doc.Push(paragraph);