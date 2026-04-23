// Remove a selected portion of text entirely from a document.

// How do I erase a specific stretch of words from the body of a document?

// Wipe out a passage so it no longer appears anywhere in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE delete text Document Builder");
let range = doc.GetRange(10, 21);
range.Delete();