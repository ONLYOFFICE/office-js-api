// Move the cursor to the start of the document in a document.

// How can I move cursor to start using a document in a document?

// Move cursor to start for a document in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText('This is the first paragraph.');

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This is the second paragraph.');
doc.Push(paragraph2);

doc.MoveCursorToStart();
doc.EnterText('Cursor was moved to the beginning. ');