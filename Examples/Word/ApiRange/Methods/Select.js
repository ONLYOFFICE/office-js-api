// Highlight a specific range of text as the active selection in a document.

// How do I make a portion of text become the current selection in a document?

// Mark a segment of text so it is selected and ready for further actions in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange(0, 9);
range.Select();
paragraph = Api.CreateParagraph();
paragraph.AddText("The word 'ONLYOFFICE' was just selected.");
doc.Push(paragraph);