// Move the cursor to the end of a paragraph in a document.

// How do I position the cursor after the last character of a paragraph in a document?

// Ensure further typed input appears at the tail of a paragraph by repositioning the cursor in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Place cursor at the end of this paragraph.");
paragraph.MoveCursorToEnd();
