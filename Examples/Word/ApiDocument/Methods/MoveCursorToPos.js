// Move cursor to a specified position inside the range object in a document.

// How can I move cursor to pos using a document in a document?

// Move cursor to pos for a document in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text in your document.");
paragraph = Api.CreateParagraph();
paragraph.AddText("The cursor was moved to the end of the document");
doc.Push(paragraph);
let range = doc.GetRange();
doc.MoveCursorToPos(range.GetEndPos());