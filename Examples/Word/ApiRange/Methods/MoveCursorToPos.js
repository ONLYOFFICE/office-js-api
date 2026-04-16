// Move cursor to a specified position inside the range object in a document.

// How can I move cursor to pos using a cell range in a document?

// Move cursor to pos for a cell range in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This text for time field");
let range = paragraph.GetRange();
range.MoveCursorToPos(range.GetEndPos());
paragraph = Api.CreateParagraph();
paragraph.AddText("The cursor was moved to the end of range");
doc.Push(paragraph);