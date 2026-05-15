// Read the author name from a comment in a document.

// How do I find out who wrote a comment in a document?

// Identify the person behind a comment by retrieving the name stored with it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let authorName = comments[0].GetAuthorName();
paragraph = Api.CreateParagraph();
paragraph.AddText("Author name: " + authorName);
doc.Push(paragraph);