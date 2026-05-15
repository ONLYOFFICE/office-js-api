// Move the cursor right by a specified number of characters in a document.

// How do I advance the cursor forward through text in a document?

// Skip past a known number of characters to land on a specific word for reading in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text in your document.");
doc.MoveCursorRight(12);

paragraph = Api.CreateParagraph();
paragraph.AddText(doc.GetCurrentWord());
doc.Push(paragraph);