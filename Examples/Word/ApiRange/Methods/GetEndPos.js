// Determine where a selected region of text finishes within the content in a document.

// How do I find the last character position of a text selection in a document?

// Pinpoint the final boundary of a highlighted span to measure its extent in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange();
paragraph = Api.CreateParagraph();
paragraph.AddText("We used range in previous paragraph with end position: " + range.GetEndPos());
doc.Push(paragraph);