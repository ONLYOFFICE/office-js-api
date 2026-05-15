// Read the creation timestamp of a comment in local time zone format in a document.

// How do I find out when a comment was created in a document?

// Display a comment's creation time in the user's local time zone for human-readable audit trails.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].SetTime("1672247153658");
let time = comments[0].GetTime();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment creation timestamp: " + time);
doc.Push(paragraph);