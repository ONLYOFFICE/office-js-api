// Move the cursor to a specific position within a text range in a document.

// How do I place the cursor at a chosen location inside a range in a document?

// Reposition the cursor to reach a particular spot within selected text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This text for time field");
let range = paragraph.GetRange();
range.MoveCursorToPos(range.GetEndPos());
paragraph = Api.CreateParagraph();
paragraph.AddText("The cursor was moved to the end of range");
doc.Push(paragraph);