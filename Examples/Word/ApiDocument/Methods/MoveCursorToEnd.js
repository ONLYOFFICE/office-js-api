// Move the cursor to the very end of a document.

// How do I place the cursor at the last position in a document?

// Append text after all existing content by jumping the cursor to the end in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText('This is the first paragraph.');

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This is the second paragraph.');
doc.Push(paragraph2);

doc.MoveCursorToEnd();
doc.EnterText(' Cursor was moved to the end.');