// Determine where a selected region of text begins within the content in a document.

// How do I find the first character position of a text selection in a document?

// Pinpoint the opening boundary of a highlighted span to measure its starting point in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange();
paragraph = Api.CreateParagraph();
paragraph.AddText("We used range in previous paragraph with start position: " + range.GetStartPos());
doc.Push(paragraph);