// Attach a reviewer note to a selected portion of text in a document.

// How do I add a comment with an author name to a text selection in a document?

// Annotate a passage with feedback and an author attribution in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Document");
let range = doc.GetRange(0, 7);
range.AddText("ONLYOFFICE ", "before");
range.AddText(" Builder", "after");
range.AddComment("comment", "John Smith");