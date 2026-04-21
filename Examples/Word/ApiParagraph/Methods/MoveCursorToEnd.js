// Move the cursor to the end of a paragraph.

// Add text to the first paragraph in the document.

// Call MoveCursorToEnd to position the cursor after the last character.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Place cursor at the end of this paragraph.");
paragraph.MoveCursorToEnd();
