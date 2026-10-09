// Remove the last word of a paragraph in a document.

// Each removal deletes one character before the cursor, as the Backspace key does.

// Move the cursor to the end of the document and remove ten characters before it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text in your document.");
doc.MoveCursorToEnd();
doc.RemoveBackward(10);