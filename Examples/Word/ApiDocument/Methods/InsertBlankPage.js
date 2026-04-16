// Insert a blank page at the current cursor position in a document.

// How can I insert the blank page using a document in a document?

// Insert the blank page for a document in a document.

const doc = Api.GetDocument();
doc.InsertBlankPage();

const paragraph = Api.CreateParagraph();
paragraph.AddText('This text is on the page after the blank one.');
doc.Push(paragraph);