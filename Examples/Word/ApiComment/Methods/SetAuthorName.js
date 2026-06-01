// Change the author name on an existing comment in a document.

// How do I update the author name displayed on a comment in a document?

// Reassign a comment to a different author by overwriting the stored name.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].SetAuthorName("Mark Potato");
paragraph = Api.CreateParagraph();
paragraph.AddText("The comment author's name was changed");
doc.Push(paragraph);