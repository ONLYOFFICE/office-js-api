// Check the class type returned by a comment reply in a document.

// How do I check what type a comment reply object is in a document?

// Retrieve and output the class type string for a comment reply in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
let commentReply = comments[0].GetReply(0);
let type = commentReply.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + type);
doc.Push(paragraph);