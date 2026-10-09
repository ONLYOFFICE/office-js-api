// Remove the first word of a paragraph in a document.

// Each removal deletes one character after the cursor, as the Delete key does.

// Move the cursor to the start of the document and remove five characters after it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text in your document.");
doc.MoveCursorToStart();
doc.RemoveForward(5);