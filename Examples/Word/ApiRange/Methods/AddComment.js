// This example adds a comment to the range.

// How to comment a range of document.

// Insert a comment into the 'ONLYOFFICE' range and add an author to it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Document");
let range = doc.GetRange(0, 7);
range.AddText("ONLYOFFICE ", "before");
range.AddText(" Builder", "after");
range.AddComment("comment", "John Smith");