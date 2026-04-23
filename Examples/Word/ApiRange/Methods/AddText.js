// Insert additional words directly before or after a text selection in a document.

// How do I place new text immediately before or after an existing passage in a document?

// Expand the content of a selection by injecting text at either end in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Document");
let range = doc.GetRange(0, 7);
range.AddText("ONLYOFFICE ", "before");
range.AddText(" Builder", "after");