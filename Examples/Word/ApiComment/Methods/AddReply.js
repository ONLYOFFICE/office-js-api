// Add a comment and make a reply for it in a document.

// How to reply to the comment in a document.

// Create a comment from a paragraph and add a reply to its first one in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);