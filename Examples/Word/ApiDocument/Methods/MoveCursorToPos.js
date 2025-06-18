// This example moves cursor to a specified position inside the range object.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text in your document.");
paragraph = Api.CreateParagraph();
paragraph.AddText("The cursor was moved to the end of the document");
doc.Push(paragraph);
let range = doc.GetRange();
doc.MoveCursorToPos(range.GetEndPos());
