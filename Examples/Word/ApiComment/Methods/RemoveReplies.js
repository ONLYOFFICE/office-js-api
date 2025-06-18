// This example removes the specified comment replies.

// How to delete specified comment reply.

// Get all comments from the presentation and remove a reply from the first one's.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
comments[0].RemoveReplies();
paragraph = Api.CreateParagraph();
paragraph.AddText("The comment replies were removed");
doc.Push(paragraph);