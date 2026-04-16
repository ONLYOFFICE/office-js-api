// Move the cursor to the end of the document in a document.

// How to move cursor to end for a document?

// Move cursor to end and display the result in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText('This is the first paragraph.');

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This is the second paragraph.');
doc.Push(paragraph2);

doc.MoveCursorToEnd();
doc.EnterText(' Cursor was moved to the end.');