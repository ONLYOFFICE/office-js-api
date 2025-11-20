// This example shows how to move the cursor left in the document.

// How to move the cursor left by a specified number of characters.

// Add text, move cursor right, then move it left.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text in your document.");
doc.MoveCursorRight(6, true, true);
doc.MoveCursorLeft(2, false, false);