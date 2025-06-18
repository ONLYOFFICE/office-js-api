// This example sets the text properties to the Range.

// How to get text property from a paragraph and apply it for a range.

// Get a range, add properties like font style to it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let textPr = paragraph.GetTextPr();
textPr.SetItalic(true);
let range = doc.GetRange(0, 24);
range.SetTextPr(textPr);