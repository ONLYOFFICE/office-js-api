// Move the cursor to the very beginning of a document.

// How do I place the cursor at the first position in a document?

// Prepend text before all existing content by jumping the cursor to the start in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText('This is the first paragraph.');

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This is the second paragraph.');
doc.Push(paragraph2);

doc.MoveCursorToStart();
doc.EnterText('Cursor was moved to the beginning. ');