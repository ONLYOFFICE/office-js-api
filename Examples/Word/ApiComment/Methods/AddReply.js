// Add a reply to a comment in a document.

// How do I add a reply to a comment in a document?

// Respond to an existing comment on a paragraph to continue a review thread in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);