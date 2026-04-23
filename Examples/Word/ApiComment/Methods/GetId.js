// Read the unique identifier of a comment in a document.

// How do I get the ID assigned to a comment in a document?

// Use a comment's ID to look it up again and access its properties.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let comment = doc.GetCommentById(comments[0].GetId());
let authorName = comment.GetAutorName();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment author name: " + authorName);
doc.Push(paragraph);