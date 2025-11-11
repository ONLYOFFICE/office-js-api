// This example shows how to move the cursor right in the document.

// How to move the cursor right by a specified number of characters.

// Add text and move cursor right with selection.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text in your document.");
doc.MoveCursorRight(6, true, true);
doc.MoveCursorLeft(2, false, false);