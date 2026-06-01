// Insert a blank page at the current cursor position in a document.

// How do I add an empty page at a specific point in a document?

// Create a visual separator between sections by placing a fully empty page before subsequent content.

const doc = Api.GetDocument();
doc.InsertBlankPage();

const paragraph = Api.CreateParagraph();
paragraph.AddText('This text is on the page after the blank one.');
doc.Push(paragraph);