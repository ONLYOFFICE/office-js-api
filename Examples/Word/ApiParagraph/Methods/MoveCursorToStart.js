// Move the cursor to the beginning of a paragraph in a document.

// How do I place the cursor at the start of a paragraph in a document?

// Position the insertion point before all text to begin editing from the top in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Place cursor here → then at the beginning.");
paragraph.MoveCursorToStart();
