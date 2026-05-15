// Retrieve all comments from a document and read the class type of the first one in a document.

// How do I get every comment in a document so I can inspect or process them in a document?

// Confirm the type of a comment object after collecting the full set of reviewer annotations in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let type = comments[0].GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + type);
doc.Push(paragraph);