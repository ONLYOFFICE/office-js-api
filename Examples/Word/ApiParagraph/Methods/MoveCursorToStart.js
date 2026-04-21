// Move the cursor to the start of a paragraph.

// Add text to the first paragraph in the document.

// Call MoveCursorToStart to position the cursor before the first character.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Place cursor here → then at the beginning.");
paragraph.MoveCursorToStart();
