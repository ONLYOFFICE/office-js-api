// Move the cursor to a specific character position in a document.

// How do I place the cursor at an exact offset within a document?

// Jump directly to a known position inside a range to begin editing there in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text in your document.");
paragraph = Api.CreateParagraph();
paragraph.AddText("The cursor was moved to the end of the document");
doc.Push(paragraph);
let range = doc.GetRange();
doc.MoveCursorToPos(range.GetEndPos());