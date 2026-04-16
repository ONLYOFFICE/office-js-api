// Set the text properties to the Range in a document.

// How to get text property from a paragraph and apply it for a range in a document.

// Get a range, add properties like font style to it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let textPr = paragraph.GetTextPr();
textPr.SetItalic(true);
let range = doc.GetRange(0, 24);
range.SetTextPr(textPr);