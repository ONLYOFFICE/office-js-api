// Access a specific reply to a comment by its index in a document.

// How do I retrieve a particular reply from a comment thread in a document?

// Read a reply's text to display or process individual responses in a comment thread.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
let commentReply = comments[0].GetReply(0);
paragraph = Api.CreateParagraph();
paragraph.AddText("First comment reply: " + commentReply.GetText());
doc.Push(paragraph);